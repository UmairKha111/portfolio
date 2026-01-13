"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Props = {
  title: string;
  subtitle: string;
  image: string;
  link: string;
};

export default function PortfolioCard({
  title,
  subtitle,
  image,
  link,
}: Props) {
  return (
    <motion.a
      href={link}
      target="_blank"
      whileHover={{ y: -8 }}
      className="group rounded-2xl border border-[var(--border)] bg-white/5 overflow-hidden transition"
    >
      <div className="relative h-44 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      <div className="p-4 flex justify-between items-center">
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-[var(--muted)]">{subtitle}</p>
        </div>

        <ExternalLink className="opacity-50 group-hover:opacity-100 transition" />
      </div>
    </motion.a>
  );
}
