import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const server = process.env.MAILCHIMP_SERVER;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;

  if (!apiKey || !server || !audienceId) {
    return NextResponse.json({ error: "Server misconfiguration." }, { status: 500 });
  }

  const url = `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email_address: email,
      status: "subscribed",
    }),
  });

  const data = await response.json();

  if (response.ok) {
    return NextResponse.json({ success: true });
  }

  // Already subscribed — treat as success so we don't leak info
  if (data.title === "Member Exists") {
    return NextResponse.json({ success: true });
  }

  return NextResponse.json({ error: "Could not add you to the list. Please try again." }, { status: 500 });
}
