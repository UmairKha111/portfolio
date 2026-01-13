"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Works", href: "/works" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar({ onMenu }: { onMenu: () => void }) {
  const pathname = usePathname();

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div
        className="
          flex items-center justify-between
          rounded-full
          bg-[var(--card)]
          border border-[var(--border)]
          backdrop-blur-md
          px-6 py-3
          transition-colors
        "
      >
        {/* Logo */}
        <h1 className="text-xl font-semibold tracking-wide text-pink-500">
          Umair
        </h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-2">
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link key={item.name} href={item.href}>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className={`
                    px-4 py-2 rounded-full text-sm transition
                    ${
                      active
                        ? "bg-gradient-to-r from-pink-500 to-red-500 text-white"
                        : "text-[var(--muted)] hover:bg-[var(--card)]"
                    }
                  `}
                >
                  {item.name}
                </motion.span>
              </Link>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            onClick={onMenu}
            className="md:hidden text-[var(--text)]"
            aria-label="Open Menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </div>
    </header>
  );
}
