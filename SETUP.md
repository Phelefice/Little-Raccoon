# Setup Guide — The Little Raccoon

This file explains how to configure third-party integrations for the site.

---

## Google Analytics 4

1. Go to [analytics.google.com](https://analytics.google.com) and create an account (or use an existing one).
2. Create a new **Property** → choose **Web** → enter your site URL (`https://thelittleraccoon.com`).
3. After setup, go to **Admin → Data Streams** and click your web stream.
4. Copy the **Measurement ID** (format: `G-XXXXXXXXXX`).
5. Replace `G-XXXXXXXXXX` in your `.env` file:
   ```
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```
6. On **Vercel**: go to your project → **Settings → Environment Variables** → add `NEXT_PUBLIC_GA_ID` with your Measurement ID.
7. Redeploy the project for the changes to take effect.

> **Note:** The `NEXT_PUBLIC_` prefix is required so Next.js exposes the variable to the browser.

---

## Mailchimp Newsletter

1. Create a free account at [mailchimp.com](https://mailchimp.com) (free up to 500 contacts).
2. After logging in, go to **Audience → All contacts → Create Audience** (or use the default one).
3. Name your audience and fill in the required fields, then save.
4. **Get your List ID:**
   - Go to **Audience → Settings → Audience name and defaults**
   - Scroll to the bottom — you'll find the **Audience ID** (also called List ID)
5. **Generate an API Key:**
   - Go to your profile icon (top right) → **Account → Extras → API Keys**
   - Click **Create A Key**, give it a name, and copy the key
6. **Find your Server Prefix:**
   - Look at your Mailchimp dashboard URL: `https://us1.admin.mailchimp.com/...`
   - The `us1` part is your server prefix (could be `us2`, `us6`, etc.)
7. Add the three variables to your `.env` file:
   ```
   MAILCHIMP_API_KEY=your-api-key-here
   MAILCHIMP_LIST_ID=your-list-id-here
   MAILCHIMP_SERVER_PREFIX=us1
   ```
8. On **Vercel**: go to your project → **Settings → Environment Variables** → add all three variables.
9. Redeploy the project.

> **Fallback:** If these variables are not set, the newsletter will save subscribers locally to `/data/subscribers.json` instead.

---

## Environment Variables Summary

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID | No (analytics disabled if missing) |
| `MAILCHIMP_API_KEY` | Mailchimp API Key | No (falls back to local JSON) |
| `MAILCHIMP_LIST_ID` | Mailchimp Audience/List ID | No (falls back to local JSON) |
| `MAILCHIMP_SERVER_PREFIX` | Mailchimp server prefix (e.g. `us1`) | No (falls back to local JSON) |
| `OPENAI_API_KEY` | OpenAI API Key (for search) | Yes (for search feature) |
