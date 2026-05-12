import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeonType",
  description: "Advanced Typing Practice Platform"
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