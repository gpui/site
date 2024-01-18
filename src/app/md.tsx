import clsx from "clsx";

export const Markdown = ({ children }: { children: React.ReactNode }) => (
  <div
    className={clsx(
      "prose prose-invert",
      "max-w-4xl",
      "prose-p:text-stone-100",
      "prose-em:text-stone-100",
      "prose-li:text-stone-100",
      "prose-h2:text-lg",
      "prose-pre:p-2 prose-pre:-mx-2 prose-pre:backdrop-blur-xl prose-pre:bg-white/10 prose-pre:shadow-inner prose-pre:shadow-black/5 prose-pre:border prose-pre:border-white/10",
      "prose-a:underline prose-a:underline-offset-4 prose-a:decoration-from-font",
    )}
  >
    {children}
  </div>
);
