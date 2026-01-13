import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umair | Portfolio",
  description: "Umair Khan – Full Stack Developer Portfolio",
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
