import clsx from "clsx";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "./nav";

export const metadata: Metadata = {
  title: "GPUI",
  description: "Meet GPUI, the open source, immediate-mode Rust UI framework.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          GeistMono.className,
          "relative max-w-[1800px] bg-black text-white",
        )}
      >
        <div className="relative z-20 mx-auto flex min-h-screen flex-col gap-8 p-8">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
