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

export async function POST(req: NextRequest) {
  try {
    let email: string | null = null;

    const contentType = req.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const body = await req.json();
      email = body.email;
    } else if (contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      email = formData.get("email") as string;
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const data = readSubscribers();
    const alreadyExists = data.subscribers.some((s) => s.email.toLowerCase() === email!.toLowerCase());

    if (!alreadyExists) {
      data.subscribers.push({ email: email.toLowerCase(), date: new Date().toISOString() });
      writeSubscribers(data);
    }

    return NextResponse.json({ success: true, message: "You're subscribed!" });
  } catch (err) {
    console.error("Newsletter error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
