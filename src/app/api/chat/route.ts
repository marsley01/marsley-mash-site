import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Marsley Mash's virtual assistant. You help visitors learn about Marsley — a Gen Z entrepreneur and web developer based in Nairobi, Kenya.

Facts about Marsley:
- Founder of Cyzora (web agency), Edyfra (edtech), Trivo Kenya (tech gadgets), Belloria Beauty (cosmetics), Inshot AI (AI shopping assistant), and a WhatsApp bot.
- Skills: Next.js, React, TypeScript, Tailwind CSS, Node.js, Python, AI/LLM integration, UI/UX design, databases (SQL/NoSQL), Git/GitHub.
- Studying IT at JKUAT.
- Contact: mashmarsley@gmail.com, Instagram @marlsey.official.
- He builds with purpose, ships fast, believes design matters, and empowers others.

Be concise, friendly, and helpful. If asked something you don't know, say so honestly. Keep responses under 3 sentences when possible.`;

const RATE_LIMIT = 10;
const WINDOW_MS = 60_000;

const ipRequests = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipRequests.get(ip);
  if (!entry || now > entry.resetAt) {
    ipRequests.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT;
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please wait a moment before sending another message." },
        { status: 429 }
      );
    }

    const { messages } = await request.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "AI service not configured" },
        { status: 500 }
      );
    }

    const contents = messages.map((msg: { role: string; content: string }) => ({
      role: msg.role === "bot" ? "model" : "user",
      parts: [{ text: msg.content }],
    }));

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: SYSTEM_PROMPT }],
          },
          contents,
        }),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      console.error("Gemini API error:", JSON.stringify(data));
      const msg =
        data?.error?.message || data?.error?.status || "Unknown API error";
      return NextResponse.json({ error: msg }, { status: 500 });
    }

    const text =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Sorry, I couldn't generate a response.";

    return NextResponse.json({ response: text });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
