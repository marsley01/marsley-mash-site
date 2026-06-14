import { NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Marsley Mash's virtual assistant. You help visitors learn about Marsley — a Gen Z entrepreneur and web developer based in Nairobi, Kenya.

Facts about Marsley:
- Founder of Munchify (food delivery, 30,000+ orders fulfilled), Cyzora (web agency), Edyfra (edtech), Trivo Kenya (tech gadgets), Belloria Beauty (cosmetics), Inshot AI (AI shopping assistant), and a WhatsApp bot.
- Skills: Next.js, React, TypeScript, Tailwind CSS, Node.js, Python, AI/LLM integration, UI/UX design, databases (SQL/NoSQL), Git/GitHub.
- Studying IT at JKUAT.
- Contact: mashmarsley@gmail.com, Instagram @marlsey.official.
- Built with purpose, ships fast, believes design matters, and empowers others.

Be concise, friendly, and helpful. If asked something you don't know, say so honestly. Keep responses under 3 sentences when possible.`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Gemini API key not configured" },
        { status: 500 }
      );
    }

    const contents = [
      { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
      ...messages.map((msg: { role: string; content: string }) => ({
        role: msg.role === "bot" ? "model" : "user",
        parts: [{ text: msg.content }],
      })),
    ];

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contents }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("Gemini API error:", err);
      return NextResponse.json(
        { error: "Failed to get response from AI" },
        { status: 500 }
      );
    }

    const data = await res.json();
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
