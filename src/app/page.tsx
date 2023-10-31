import { agrandir_grand } from "@/font";
import clsx from "clsx";
import Link from "next/link";
import { StickerImage, sticker } from "./sticker";
import { home } from "../content/home";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Home() {
  return (
    <main className="min-h-screen grid grid-cols-12 gap-4">
      <div className="col-span-8 flex flex-col gap-16 pb-96">
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
            className={clsx(
              "inline-flex text-4xl grow-0 px-8 py-6 -mx-8 font-thin gap-3 rounded-full",
              "bg-transparent",
              "hover:bg-lime-500/30 hover:backdrop-hue-rotate-90/50"
            )}
          >
            <span className="underline italic underline-offset-8 decoration-from-font decoration-wavy leading-none">
              Read the Docs
            </span>
            <span>&rarr;</span>
          </Link>
        </p>
        <div
          className={clsx(
            "prose prose-invert md:prose-lg",
            "max-w-4xl mt-16",
            "prose-p:text-stone-100",
            "prose-em:text-stone-100",
            "prose-li:text-stone-100",
            "prose-pre:p-4 prose-pre:-mx-4 prose-pre:rounded-2xl prose-pre:backdrop-blur-xl prose-pre:bg-white/10 prose-pre:shadow-inner prose-pre:shadow-black/5 prose-pre:border prose-pre:border-white/10",
            "prose-a:underline prose-a:underline-offset-4 prose-a:decoration-from-font"
          )}
        >
          <ReactMarkdown
            components={{
              code(props) {
                const { children, className, node, ...rest } = props;
                const match = /language-(\w+)/.exec(className || "");
                return match ? (
                  <SyntaxHighlighter
                    language="rust"
                    style={dark}
                    useInlineStyles={false}
                    PreTag="div"
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {home}
          </ReactMarkdown>
        </div>
      </div>
      <div className="col-span-3 flex flex-col gap-16">
        <div className="w-full h-96 relative">
          <StickerImage
            img={sticker.rust}
            alt='A classic "Hello my name is" sticker reading "Hello my name is GPUI"'
            className="absolute left-64 top-12"
          />
          <StickerImage
            img={sticker.helloMyNameIs}
            alt='A classic "Hello my name is" sticker reading "Hello my name is GPUI"'
            className="absolute -left-8 -top-8"
          />
          <StickerImage
            img={sticker.ferris}
            alt='A classic "Hello my name is" sticker reading "Hello my name is GPUI"'
            className="absolute left-20 -bottom-8 rotate-3"
          />
        </div>
        <div className="">
          <h2
            className={clsx(
              "italic text-xl grow-0 px-4 py-2 -mx-4 gap-3",
              "text-stone-200 max-w-2xl leading-tight"
            )}
          >
            Powering:
          </h2>
        </div>{" "}
        <div className="">
          <h2
            className={clsx(
              "italic text-xl grow-0 px-4 py-2 -mx-4 gap-3",
              "text-stone-200 max-w-2xl leading-tight"
            )}
          >
            GPUI is made possible by:
          </h2>
        </div>
      </div>
    </main>
  );
}
