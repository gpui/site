import Contributing from "@/content/sidebar/contributing.md";
import MadePossibleBy from "@/content/sidebar/made-possible-by.md";
import { get_contributors } from "@/lib/contributor";
import Image from "next/image";
import Link from "next/link";
import { Markdown } from "./md";

export const Sidebar = async () => {
  const contributors = await get_contributors();

  return (
    <div className="col-span-3 flex flex-col gap-16">
      <div className="flex flex-col gap-6">
        <Markdown>
          <MadePossibleBy />
        </Markdown>
        <div className="flex flex-wrap gap-3">
          {contributors.map((contributor) => (
            <Link
              key={contributor.handle}
              href={contributor.url}
              title={contributor.handle}
              className="group flex items-center"
            >
              <Image
                src={contributor.avatar}
                alt={contributor.handle}
                width={64}
                height={64}
                className="h-8 w-8 rounded-md grayscale group-hover:grayscale-0"
              />
            </Link>
          ))}
        </div>
        <Link
          href="https://github.com/zed-industries/zed/blob/main/CONTRIBUTING.md"
          className="flex text-sm hover:text-stone-300"
        >
          How to contribute &rarr;
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <Markdown>
          <Contributing />
        </Markdown>
      </div>
    </div>
  );
};
