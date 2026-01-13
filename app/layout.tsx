import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harsh | Portfolio",
  description: "Harsh Pandey - Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
