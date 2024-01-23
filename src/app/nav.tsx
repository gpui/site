"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ExternalLink } from "lucide-react";

type NavItemProps = {
  href: string;
  title: string;
  external?: boolean;
};

export const NavItem = ({ href, title, external }: NavItemProps) => {
  const currentPath = usePathname();

  return (
    <Link
      href={href}
      className={clsx(
        "flex items-center gap-2 text-stone-200",
        currentPath === href ? "opacity-100" : "opacity-60 hover:opacity-80",
      )}
    >
      <span>{title}</span>
      {external && (
        <span className="opacity-70">
          <ExternalLink size={12} />
        </span>
      )}
    </Link>
  );
};

export const Nav = () => {
  return (
    <nav className="flex justify-between px-4 py-2">
      <div className="flex items-center gap-8">
        <NavItem href="/" title="gpui" />
        <NavItem
          href="https://github.com/zed-industries/zed/tree/main/crates/gpui"
          title="github"
          external
        />
      </div>
      <div className="flex items-center gap-12">
        <NavItem href="https://zed.dev" title="zed" external />
      </div>
    </nav>
  );
};
