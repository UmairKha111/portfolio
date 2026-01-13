"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      className="
        min-h-screen
        flex items-center justify-center
        px-6
        pt-32
      "
    >
      <div className="flex flex-col items-center text-center gap-6">

        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          <div className="w-48 h-48 rounded-full bg-orange-500 flex items-center justify-center">
            <Image
              src="/profile.jpg"
              alt="Umair Profile"
              width={190}
              height={190}
              className="rounded-full object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ y: 15, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-3xl md:text-4xl font-semibold"
        >
          Umair Khan
        </motion.h1>

        {/* Role */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="px-4 py-1 rounded-full text-sm bg-[var(--card)] text-[var(--muted)]"
        >
          Full Stack Web Developer
        </motion.span>

        {/* Social Icons */}
        <div className="flex gap-10 mt-2">
          <AutoBounceIcon link="https://wa.me/917052568655">
            <FaWhatsapp size={20} />
          </AutoBounceIcon>

          <AutoBounceIcon link="https://github.com/umairkha111">
            <Github />
          </AutoBounceIcon>

          <AutoBounceIcon link="https://instagram.com/umairkha11">
            <Instagram />
          </AutoBounceIcon>

          <AutoBounceIcon link="https://www.linkedin.com/in/umair-khan-5a396029a">
            <Linkedin />
          </AutoBounceIcon>
        </div>

        {/* Download CV */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/umairkhan.CV.pdf"
          download
          className="
            mt-4 px-8 py-3 rounded-full
            bg-gradient-to-r from-pink-500 to-red-500
            text-white font-medium shadow-lg
          "
        >
          ⬇ Download CV
        </motion.a>

      </div>
    </section>
  );
}

/* 🔥 AUTO ZOOM-IN → ZOOM-OUT ICON (FAST) */
function AutoBounceIcon({
  children,
  link,
}: {
  children: React.ReactNode;
  link: string;
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      className="
        w-11 h-11 rounded-xl
        bg-[var(--card)]
        flex items-center justify-center
        text-[var(--muted)]
        hover:text-white
        hover:bg-gradient-to-r
        hover:from-pink-500
        hover:to-red-500
        transition-colors duration-200
      "
      whileHover={{
        scale: [1, 1.35, 1],   // 🔥 zoom in then back
      }}
      transition={{
        duration: 0.60,        // FAST
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.a>
  );
}
