import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const subscribersPath = path.join(process.cwd(), "data", "subscribers.json");

function readSubscribers(): { subscribers: { email: string; date: string }[] } {
  try {
    if (!fs.existsSync(subscribersPath)) {
      fs.mkdirSync(path.dirname(subscribersPath), { recursive: true });
      fs.writeFileSync(subscribersPath, JSON.stringify({ subscribers: [] }));
    }
    return JSON.parse(fs.readFileSync(subscribersPath, "utf-8"));
  } catch {
    return { subscribers: [] };
  }
}

function writeSubscribers(data: { subscribers: { email: string; date: string }[] }) {
  fs.writeFileSync(subscribersPath, JSON.stringify(data, null, 2));
}

async function subscribeToMailchimp(email: string): Promise<{ success: boolean; alreadySubscribed?: boolean; invalidEmail?: boolean; error?: string }> {
  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_LIST_ID;
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX || "us1";

  if (!apiKey || !listId) {
    return { success: false, error: "Mailchimp not configured" };
  }

  const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
    },
    body: JSON.stringify({
      email_address: email,
      status: "subscribed",
    }),
  });

  const data = await response.json();

  if (response.ok) {
    return { success: true };
  }

  if (data.title === "Member Exists") {
    return { success: false, alreadySubscribed: true };
  }

  if (data.title === "Invalid Resource") {
    return { success: false, invalidEmail: true };
  }

  return { success: false, error: data.detail || "Mailchimp error" };
}

export async function POST(req: NextRequest) {
  try {
    let email: string | null = null;

    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const body = await req.json();
      email = body.email;
    } else if (
      contentType.includes("application/x-www-form-urlencoded") ||
      contentType.includes("multipart/form-data")
    ) {
      const formData = await req.formData();
      email = formData.get("email") as string;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const normalizedEmail = email.toLowerCase();

    // Try Mailchimp first if configured
    const mailchimpConfigured =
      !!process.env.MAILCHIMP_API_KEY && !!process.env.MAILCHIMP_LIST_ID;

    if (mailchimpConfigured) {
      const result = await subscribeToMailchimp(normalizedEmail);

      if (result.success) {
        return NextResponse.json({ success: true, message: "You're subscribed!" });
      }

      if (result.alreadySubscribed) {
        return NextResponse.json({ success: true, message: "You're already subscribed!" });
      }

      if (result.invalidEmail) {
        return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
      }

      // If Mailchimp fails for another reason, fall through to local fallback
      console.error("Mailchimp error:", result.error);
    }

    // Fallback: save locally to subscribers.json
    const data = readSubscribers();
    const alreadyExists = data.subscribers.some(
      (s) => s.email.toLowerCase() === normalizedEmail
    );

    if (!alreadyExists) {
      data.subscribers.push({ email: normalizedEmail, date: new Date().toISOString() });
      writeSubscribers(data);
    }

    return NextResponse.json({ success: true, message: "You're subscribed!" });
  } catch (err) {
    console.error("Newsletter error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
