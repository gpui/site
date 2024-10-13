import clsx from "clsx";
import { GeistMono } from "geist/font/mono";
import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "./nav";

export const metadata: Metadata = {
  title: "gpui",
  description:
    "A fast, productive UI framework for Rust from the creators of Zed.",
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
          "max-w-screen-sm md:max-w-[1800px] bg-black text-white",
        )}
      >
        <div className="z-20 mx-auto flex min-h-screen flex-col gap-8 p-2 md:p-8">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
