"use client";

import { DOCS_URL } from "@/content/const";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  href: string;
  title: string;
};

export const NavItem = ({ href, title }: NavItemProps) => {
  const currentPath = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        "text-stone-200",
        currentPath === href ? "opacity-100" : "opacity-60 hover:opacity-80",
      )}
    >
      {title}
    </Link>
  );
};

export const Nav = () => {
  return (
    <nav className="flex justify-between px-4 py-2">
      <div className="flex items-center gap-8">
        <NavItem href="/" title="gpui" />
        <NavItem href={DOCS_URL} title="docs" />
        <NavItem href="https://github.com/gpui" title="github" />
      </div>
      <div className="flex items-center gap-12">
        <NavItem href="https://zed.dev" title="zed" />
      </div>
    </nav>
  );
};
