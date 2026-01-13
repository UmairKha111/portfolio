"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import MobileMenu from "@/components/MobileMenu";
import Works from "@/components/Works";

export default function WorksPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar onMenu={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <Works />
    </>
  );
}
