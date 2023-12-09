import { agrandir_grand } from "@/font";
import clsx from "clsx";
import Link from "next/link";
import { StickerImage, sticker } from "./sticker";
import { home } from "../content/home";
import { Markdown } from "./md";
import { DOCS_URL } from "@/content/const";

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-12 gap-8">
      <div className="col-span-8 flex flex-col gap-4 pb-96">
        <h1
          className={clsx(
            "max-w-4xl font-extrabold leading-none text-stone-200",
          )}
        >
          Meet GPUI, the open source, immediate-mode Rust UI framework.
        </h1>
        <h2
          className={clsx(
            "max-w-2xl font-extrabold leading-tight text-stone-200",
          )}
        >
          <span className="opacity-80">Brought to you by the team behind</span>{" "}
          <Link href="https://zed.dev">
            Zed
          </Link>{" "}
          <span className="opacity-80">&amp; </span>
          <Link
            href="https://github.com/atom/atom"
          >
            Atom
          </Link>
          <span className="opacity-80">.</span>
        </h2>
        <p>
          <Link
            href={DOCS_URL}
          >
            <span className="italic leading-none decoration-from-font underline-offset-8">
              Get Started
            </span>
            {' '}
            <span>&rarr;</span>
          </Link>
        </p>
        <div
          className={clsx(
            "prose prose-invert",
            "mt-16 max-w-4xl",
            "prose-p:text-stone-100",
            "prose-em:text-stone-100",
            "prose-li:text-stone-100",
            "prose-h2:text-lg",
            "prose-pre:p-2 prose-pre:-mx-2 prose-pre:backdrop-blur-xl prose-pre:bg-white/10 prose-pre:shadow-inner prose-pre:shadow-black/5 prose-pre:border prose-pre:border-white/10",
            "prose-a:underline prose-a:underline-offset-4 prose-a:decoration-from-font",
          )}
        >
          <Markdown>{home}</Markdown>
        </div>
      </div>
      <div className="col-span-3 flex flex-col gap-16">
        <div className="">
          <h2
            className={clsx(
              "-mx-1 grow-0 gap-3 px-4 py-2 italic",
              "max-w-2xl leading-tight text-stone-200",
            )}
          >
            Powering:
          </h2>
        </div>{" "}
        <div className="">
          <h2
            className={clsx(
              "-mx-1 grow-0 gap-3 px-4 py-2 italic",
              "max-w-2xl leading-tight text-stone-200",
            )}
          >
            Made possible by:
          </h2>
        </div>
      </div>
    </main>
  );
}
