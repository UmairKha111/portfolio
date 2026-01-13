"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import MobileMenu from "@/components/MobileMenu";

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar onMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <main className="min-h-screen px-6 py-32 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-semibold mb-6">
            About <span className="text-pink-500">Me</span>
          </h1>

          {/* Content Card */}
          <div
            className="
              rounded-2xl
              border border-[var(--border)]
              bg-[var(--card)]
              p-6 md:p-8
              space-y-5
              text-[var(--muted)]
              leading-relaxed
            "
          >
            <p>
              Hello, I’m{" "}
              <span className="text-[var(--text)] font-medium">
                Umair Khan
              </span>
              , a Full Stack Web Developer with a strong focus on building
              modern, scalable, and performance-oriented web applications.
              I enjoy working across both frontend and backend development,
              creating solutions that are practical, efficient, and aligned
              with real-world requirements.
            </p>

            <p>
              I have hands-on experience with the{" "}
              <span className="text-[var(--text)]">
                MERN stack (MongoDB, Express.js, React.js, and Node.js)
              </span>
              , and I specialize in developing responsive user interfaces,
              structured backend systems, and RESTful APIs. My development
              approach emphasizes clean code, maintainable architecture, and
              smooth user experience.
            </p>

            <p>
              Throughout my academic journey and personal projects, I have
              worked on applications that follow industry-level development
              practices, including authentication, database design, API
              integration, and modular code organization. I pay close
              attention to details such as performance optimization, usability,
              and scalability.
            </p>

            <p>
              I enjoy solving complex problems and continuously improving
              existing systems. Whether it involves refining UI components,
              improving backend logic, or debugging issues, I approach every
              task with a problem-solving mindset and a willingness to learn.
            </p>

            <p>
              Beyond technical skills, I value discipline, clarity, and
              consistency in my work. I am constantly upgrading my skills by
              working on real-world projects, exploring better development
              patterns, and staying updated with modern web technologies.
              I am currently seeking opportunities where I can contribute as
              a Full Stack Developer and grow within a professional and
              collaborative environment.
            </p>
          </div>
        </motion.div>
      </main>
    </>
  );
}
