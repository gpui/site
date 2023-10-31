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
        Meet GPUI, the open source UI framework by the team behind{" "}
        <Link
          href="https://zed.dev"
          className="underline underline-offset-8 decoration-wavy decoration-4"
        >
          Zed
        </Link>{" "}
        &amp;{" "}
        <Link
          href="https://github.com/atom/atom"
          className="underline underline-offset-8 decoration-wavy decoration-4"
        >
          Atom
        </Link>
        .
      </h1>
      <p>
        <Link
          href={"/docs"}
          className="inline-flex text-2xl grow-0 px-4 py-2 -mx-4 backdrop-blur-lg backdrop-hue-rotate-60/20 hover:backdrop-hue-rotate-30 shadow-2xl shadow-lime-400/50"
        >
          Read the Docs
        </Link>
      </p>
    </main>
  );
}
