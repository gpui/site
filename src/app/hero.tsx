import { DOCS_URL } from "@/content/const";
import clsx from "clsx";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="col-span-8 flex flex-col gap-8">
      <h1 className={clsx("max-w-2xl text-2xl leading-tight text-stone-200")}>
        Meet GPUI, the open source, immediate-mode Rust UI framework.
      </h1>
      <h2
        className={clsx("flex max-w-2xl gap-1.5 leading-tight text-stone-200")}
      >
        <p className="opacity-80">Brought to you by the team behind</p>
        <Link href="https://zed.dev">Zed</Link>
        <p className="opacity-80">&amp; </p>
        <Link href="https://github.com/atom/atom">Atom</Link>
        <p className="opacity-80">.</p>
      </h2>
      <a href={DOCS_URL}>
        <div
          className={clsx(
            "text-stone-200",
            "italic leading-none decoration-from-font underline-offset-8",
            "opacity-60 hover:opacity-80",
          )}
        >
          Get Started <span>&rarr;</span>
        </div>
      </a>
    </div>
  );
};
