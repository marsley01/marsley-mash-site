"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTheme } from "./ThemeProvider";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" />
    <line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" />
    <line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
);

const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Navigation() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <nav className="mx-auto mt-4 flex max-w-fit items-center gap-1 rounded-2xl border border-border/40 bg-background/70 px-1 py-1 backdrop-blur-2xl sm:max-w-fit">
          <Link
            href="/"
            className="px-4 py-2 text-sm font-semibold tracking-tight text-foreground/80 transition-colors hover:text-foreground"
          >
            MM
          </Link>

          <div className="hidden sm:contents">
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
            <div className="h-5 w-px bg-border/40" />
            <button
              onClick={toggleTheme}
              className="rounded-xl px-3 py-2 text-text-secondary transition-colors hover:text-foreground"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex rounded-xl px-3 py-2 text-text-secondary transition-colors hover:text-foreground sm:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-0 top-0 z-40 border-b border-border/40 bg-background/80 pt-20 backdrop-blur-2xl sm:hidden"
          >
            <div className="flex flex-col items-center gap-1 px-4 pb-6">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`w-full rounded-xl px-4 py-3 text-center text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-foreground/10 text-foreground"
                        : "text-text-secondary hover:text-foreground"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="mt-2 h-px w-12 bg-border/40" />
              <button
                onClick={() => { toggleTheme(); setMobileOpen(false); }}
                className="mt-2 flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium text-text-secondary transition-colors hover:text-foreground"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <><SunIcon /> Light Mode</> : <><MoonIcon /> Dark Mode</>}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
