import { agrandir_grand } from "@/font";
import clsx from "clsx";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-8">
      <h1
        className={clsx(
          agrandir_grand.className,
          "text-6xl text-stone-200 max-w-4xl font-extrabold leading-none"
        )}
      >
        Meet GPUI, the open source, immediate-mode Rust UI framework.
      </h1>
      <h1
        className={clsx(
          agrandir_grand.className,
          "text-4xl text-stone-200 max-w-2xl font-extrabold leading-tight"
        )}
      >
        <span className="opacity-80">Brought to you by the team behind</span>{" "}
        <Link href="https://zed.dev" className="hover:text-black">
          Zed
        </Link>{" "}
        <span className="opacity-80">&amp; </span>
        <Link
          href="https://github.com/atom/atom"
          className={clsx(
            "hover:bg-gradient-to-b from-[#A7D396] to-[#4DA06C] hover:bg-clip-text hover:text-transparent hover:drop-shadow-md"
          )}
        >
          Atom
        </Link>
        <span className="opacity-80">.</span>
      </h1>
      <p>
        <Link
          href={"/docs"}
          className="inline-flex text-2xl grow-0 px-4 py-2 -mx-4 text-thin gap-3"
        >
          <span className="underline italic underline-offset-8">
            Read the Docs
          </span>
          <span>&rarr;</span>
        </Link>
      </p>
    </main>
  );
}
