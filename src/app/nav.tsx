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
        currentPath === href ? "opacity-100" : "opacity-60 hover:opacity-80"
      )}
    >
      {title}
    </Link>
  );
};

export const Nav = () => {
  return (
    <nav className="flex gap-8 items-center">
      <NavItem href="/" title="gpui" />
      <NavItem href={DOCS_URL} title="docs" />
      <NavItem href="https://github.com/gpui" title="github" />
    </nav>
  );
};
