import { NextResponse } from "next/server";
import crypto from "crypto";

// IMPORTANT: Keep this route on Node runtime (avoids Buffer/crypto edge issues)
export const runtime = "nodejs";

function md5(input: string) {
  return crypto.createHash("md5").update(input.toLowerCase()).digest("hex");
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX;

    if (!apiKey || !audienceId || !serverPrefix) {
      return NextResponse.json(
        { error: "Server is missing Mailchimp configuration." },
        { status: 500 }
      );
    }

    const cleanEmail = normalizeEmail(email);

    // Mailchimp member endpoint uses MD5 hash of lowercase email
    const subscriberHash = md5(cleanEmail);

    const url = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members/${subscriberHash}`;

    // "subscribed" = immediate, "pending" = double opt-in confirmation email
    const status = "subscribed";

    const auth = Buffer.from(`anystring:${apiKey}`).toString("base64");

    const mcRes = await fetch(url, {
      method: "PUT", // upsert
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        email_address: cleanEmail,
        status_if_new: status,
        status,
      }),
    });

    const data = await mcRes.json().catch(() => null);

    if (!mcRes.ok) {
      const detail = data?.detail || "Mailchimp error";

      if (detail.toLowerCase().includes("is already a list member")) {
        return NextResponse.json({ ok: true, message: "You're already subscribed!" });
      }
      if (detail.toLowerCase().includes("looks fake or invalid")) {
        return NextResponse.json({ error: "That email looks invalid." }, { status: 400 });
      }

      return NextResponse.json({ error: detail }, { status: mcRes.status });
    }

    return NextResponse.json({
      ok: true,
      message: "You're subscribed!",
    });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
