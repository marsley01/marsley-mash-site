"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "bot";
  content: string;
}

const faqResponses: Record<string, string> = {
  hello:
    "Hi there! I'm Mash's virtual assistant. Ask me about his projects, skills, or how to get in touch!",
  hi: "Hi there! I'm Mash's virtual assistant. Ask me about his projects, skills, or how to get in touch!",
  "who is marsley mash":
    "Marsley Mash is a Gen Z entrepreneur and web developer based in Nairobi, Kenya. He's the founder of Munchify, Cyzora, Edyfra, Trivo Kenya, Belloria Beauty, Inshot AI, and more!",
  "what is munchify":
    "Munchify is a food delivery platform focused on student convenience and speed. It fulfilled 30,000+ orders in one semester at Maseno University.",
  "what is cyzora":
    "Cyzora is a web agency that builds and hosts framework-based websites for businesses and creators.",
  "what is edyfra":
    "Edyfra is an edtech platform that helps schools monitor student performance during holidays, connects tutors with students, and enables resource sharing.",
  "what is trivo kenya":
    "Trivo Kenya is an online store that sells premium tech gadgets and accessories.",
  "what is belloria beauty":
    "Belloria Beauty is a cosmetic brand showcase site that Mash built to display beauty products.",
  "what is inshot ai":
    "Inshot AI is an AI-powered shop assistant tool that helps customers browse products and get recommendations, acting like a smart sales assistant.",
  "whatsapp bot":
    "The WhatsApp Bot runs in the background to handle customer service inquiries via WhatsApp. It can show catalogs, answer product questions, and act as a shop assistant.",
  contact:
    "You can reach Marsley via email at mashmarsley@gmail.com or on Instagram @marlsey.official. You can also use the contact form on this site!",
  email: "mashmarsley@gmail.com",
  instagram: "@marlsey.official on Instagram",
  skills:
    "Mash specializes in Next.js, React, TypeScript, Tailwind CSS, UI/UX design, AI integrations, and full-stack web development.",
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase().trim();
  for (const [key, response] of Object.entries(faqResponses)) {
    if (lower.includes(key)) {
      return response;
    }
  }
  return "I'm not sure about that. Try asking about Munchify, Cyzora, Edyfra, or how to contact Mash!";
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content:
        "Hey! I'm Mash's virtual assistant. Ask me anything about his projects or how to reach him!",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setInput("");

    setTimeout(() => {
      const botReply = getBotResponse(trimmed);
      setMessages((prev) => [...prev, { role: "bot", content: botReply }]);
    }, 400);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-24 right-6 z-50 flex h-[420px] w-[360px] flex-col overflow-hidden rounded-2xl border border-border/40 bg-card shadow-2xl shadow-black/50 backdrop-blur-2xl sm:bottom-28 sm:right-8"
          >
            <div className="flex items-center justify-between border-b border-border/40 px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-xs font-bold text-white">
                  M
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Mash Assistant
                  </p>
                  <p className="text-xs text-text-secondary">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-text-secondary transition-colors hover:bg-foreground/10 hover:text-foreground"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`mb-3 flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-accent text-white"
                        : "bg-card-secondary text-foreground"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-border/40 px-4 py-3">
              <div className="flex items-center gap-2 rounded-xl border border-border/40 bg-card-secondary/50 px-4 py-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-transparent text-sm text-foreground outline-none placeholder:text-text-secondary"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs text-white transition-opacity hover:opacity-80 disabled:opacity-30"
                >
                  →
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-xl text-white shadow-lg shadow-accent/30 transition-shadow hover:shadow-xl hover:shadow-accent/40 sm:bottom-8 sm:right-8"
      >
        {isOpen ? "✕" : "?"}
      </motion.button>
    </>
  );
}
