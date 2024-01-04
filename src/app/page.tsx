import clsx from "clsx";
import { home } from "../content/home";
import { Markdown } from "./md";
import { Hero } from "./hero";
import { Sidebar } from "./sidebar";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="flex justify-between p-4">
      <main className="grid min-h-screen grid-cols-12 gap-20">
        <div className="col-span-8 flex flex-col gap-4">
          <Hero />
          <div className="col-span-8 flex flex-col gap-4 pb-96">
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
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          {/* @ts-expect-error Server Component */}
          <Sidebar />
        </Suspense>
      </main>
    </div>
  );
}
