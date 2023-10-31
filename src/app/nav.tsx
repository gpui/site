"use client";

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
        "font-medium text-lg text-stone-200",
        "hover:underline underline-offset-8 decoration-wavy decoration-1",
        currentPath === href ? "opacity-100" : "opacity-60 hover:opacity-80"
      )}
    >
      {title}
    </Link>
  );
};

export const Nav = () => {
  return (
    <nav className="flex gap-8 items-center font-medium text-lg">
      <NavItem href="/" title="gpui" />
      <NavItem href="/docs" title="docs" />
      <NavItem href="https://github.com/gpui" title="github" />
    </nav>
  );
};
