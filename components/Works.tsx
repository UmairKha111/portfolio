"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PortfolioCard from "./PortfolioCard";
import { projects, ProjectCategory } from "@/lib/projects";

const filters: { label: string; value: ProjectCategory }[] = [
  { label: "All", value: "all" },
  { label: "Live Projects", value: "live" },
  { label: "Github Projects", value: "github" },
];

export default function Works() {
  const [active, setActive] = useState<ProjectCategory>("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="px-6 py-24 max-w-6xl mx-auto">
      
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-3xl font-semibold">
          Portfolio <span className="text-pink-500">—</span>
        </h2>
      </div>

      {/* Filters */}
      <div className="flex gap-6 text-sm mb-10">
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`transition ${
              active === f.value
                ? "text-pink-500"
                : "text-[var(--muted)] hover:text-white"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map((p) => (
          <PortfolioCard key={p.id} {...p} />
        ))}
      </motion.div>

    </section>
  );
}
