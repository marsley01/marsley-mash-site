"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <nav className="mx-auto mt-4 flex max-w-fit items-center gap-1 rounded-2xl border border-border/40 bg-background/70 px-1 py-1 backdrop-blur-2xl">
          <Link
            href="/"
            className="px-4 py-2 text-sm font-semibold tracking-tight text-foreground/80 transition-colors hover:text-foreground"
          >
            MM
          </Link>
          <div className="h-5 w-px bg-border/40" />
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onMouseEnter={() => setHovered(link.href)}
                onMouseLeave={() => setHovered(null)}
                className={`relative rounded-xl px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-foreground"
                    : "text-text-secondary hover:text-foreground"
                }`}
              >
                {link.label}
                {(isActive || hovered === link.href) && (
                  <motion.span
                    layoutId="nav-indicator"
                    className={`absolute inset-0 rounded-xl ${
                      isActive ? "bg-foreground/10" : "bg-foreground/5"
                    }`}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </motion.header>
  );
}
