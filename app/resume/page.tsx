"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import MobileMenu from "@/components/MobileMenu";
import { GraduationCap, Sparkles } from "lucide-react";

export default function ResumePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar onMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="min-h-screen px-6 py-28 max-w-6xl mx-auto">
        {/* Page Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h1 className="text-4xl font-semibold inline-block">
            Resume
          </h1>
          <div className="h-1 w-28 bg-gradient-to-r from-pink-500 to-red-500 mt-3 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* EDUCATION */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <GraduationCap className="text-pink-500" />
              <h2 className="text-2xl font-semibold">Education</h2>
            </div>

            <div className="space-y-6">
              <ResumeCard>
                <p className="text-sm text-[var(--muted)]">
                  2022 – 2025
                </p>
                <h3 className="font-semibold text-[var(--text)]">
                  Bachelor of Computer Application (BCA)
                </h3>
                <p className="text-[var(--muted)]">
                  Khwaja Moinuddin Chishti Language University, Lucknow
                </p>
                <p className="text-sm text-[var(--muted)] mt-2">
                  CGPA: 7.7
                </p>
              </ResumeCard>
            </div>
          </section>

          {/* EXPERIENCE & TRAINING */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-pink-500" />
              <h2 className="text-2xl font-semibold">Experience & Work</h2>
            </div>

            <div className="space-y-6">
              <ResumeCard>
                <p className="text-sm text-[var(--muted)]">
                  2024 – Present
                </p>
                <h3 className="font-semibold text-[var(--text)]">
                  Freelance Full Stack MERN Developer
                </h3>
                <p className="text-[var(--muted)]">
                  Self-Employed
                </p>
                <ul className="list-disc list-inside text-sm text-[var(--muted)] mt-2 space-y-1">
                  <li>Developing full-stack web applications using MERN stack</li>
                  <li>Building RESTful APIs and JWT-based authentication</li>
                  <li>Designing responsive UIs with React & Tailwind CSS</li>
                  <li>Working directly with clients on real-world requirements</li>
                </ul>
              </ResumeCard>

              <ResumeCard>
                <p className="text-sm text-[var(--muted)]">
                  Academic Projects
                </p>
                <h3 className="font-semibold text-[var(--text)]">
                  MERN Stack E-Commerce Platform
                </h3>
                <p className="text-[var(--muted)]">
                  React.js, Node.js, Express.js, MongoDB, Tailwind CSS
                </p>
                <ul className="list-disc list-inside text-sm text-[var(--muted)] mt-2 space-y-1">
                  <li>User authentication & order management</li>
                  <li>JWT-based secure login system</li>
                  <li>RESTful API integration</li>
                </ul>
              </ResumeCard>

              <ResumeCard>
                <p className="text-sm text-[var(--muted)]">
                  Frontend Project
                </p>
                <h3 className="font-semibold text-[var(--text)]">
                  Travel Website (Frontend)
                </h3>
                <p className="text-[var(--muted)]">
                  React.js, Tailwind CSS
                </p>
                <ul className="list-disc list-inside text-sm text-[var(--muted)] mt-2 space-y-1">
                  <li>Reusable React components</li>
                  <li>Mobile-first responsive design</li>
                  <li>Optimized UI/UX for all devices</li>
                </ul>
              </ResumeCard>
            </div>
          </section>

        </div>
      </main>
    </>
  );
}

/* THEME SAFE CARD */
function ResumeCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="
        rounded-2xl
        p-6
        border border-[var(--border)]
        bg-[var(--card)]
      "
    >
      {children}
    </motion.div>
  );
}
