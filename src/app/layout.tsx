import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Merry Christmas",
  description: "By Ryan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
