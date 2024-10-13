import clsx from "clsx";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="col-span-8 flex flex-col gap-8">
      <h1 className={clsx("max-w-2xl text-2xl leading-tight text-stone-200")}>
        gpui
      </h1>
      <h2 className={clsx("max-w-2xl leading-tight text-stone-200")}>
        A fast, productive UI framework for Rust from the creators of&nbsp;
        <Link className="underline underline-offset-4" href="https://zed.dev">
          Zed
        </Link>
        .
      </h2>
      <div>
        <a
          className={clsx(
            "text-stone-200",
            "italic leading-none decoration-from-font underline-offset-8",
            "opacity-60 hover:opacity-80",
          )}
          href="https://github.com/zed-industries/zed/tree/main/crates/gpui"
        >
          Get Started <span>&rarr;</span>
        </a>
      </div>
    </div>
  );
};
