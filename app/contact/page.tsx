"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import MobileMenu from "@/components/MobileMenu";
import { Phone, Mail } from "lucide-react";

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar onMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="min-h-screen px-6 py-28 max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h1 className="text-4xl font-semibold inline-block">
            Contact
          </h1>
          <div className="h-1 w-28 bg-gradient-to-r from-pink-500 to-red-500 mt-3 rounded-full" />
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Left – Contact Info */}
          <div className="space-y-6">
            <InfoCard
              icon={<Phone />}
              title="Phone"
              value="+91 7052568655"
            />
            <InfoCard
              icon={<Mail />}
              title="Email"
              value="umairkha039@gmail.com"
            />
          </div>

          {/* Right – Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="
              rounded-2xl
              border border-[var(--border)]
              bg-[var(--card)]
              p-8
            "
          >
            <h2 className="text-2xl font-semibold mb-4">
              I'm Always Open To Discussing Product
              <br />
              <span className="text-pink-500">design work or partnerships.</span>
            </h2>

            <form className="space-y-5 mt-6">
              <Input placeholder="Name *" />
              <Input placeholder="Email *" />
              <textarea
                placeholder="Message *"
                className="
                  w-full bg-transparent
                  border-b border-[var(--border)]
                  focus:border-pink-500
                  outline-none py-2 resize-none text-sm
                  text-[var(--text)]
                "
                rows={4}
              />

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 to-red-500 text-white font-medium"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

        </div>
      </main>
    </>
  );
}

/* Components */

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="
        flex items-center gap-4
        rounded-2xl
        border border-[var(--border)]
        bg-[var(--card)]
        p-6
      "
    >
      <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-500">
        {icon}
      </div>
      <div>
        <p className="text-sm text-[var(--muted)]">{title}</p>
        <p className="text-[var(--text)]">{value}</p>
      </div>
    </motion.div>
  );
}

function Input({ placeholder }: { placeholder: string }) {
  return (
    <input
      placeholder={placeholder}
      className="
        w-full bg-transparent
        border-b border-[var(--border)]
        focus:border-pink-500
        outline-none py-2 text-sm
        text-[var(--text)]
      "
    />
  );
}
