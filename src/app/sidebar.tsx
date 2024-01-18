import Contributing from "@/content/sidebar/contributing.md";
import MadePossibleBy from "@/content/sidebar/made-possible-by.md";
import { get_contributors } from "@/lib/contributor";
import Image from "next/image";
import Link from "next/link";
import { MarkdownContainer } from "./md";

export const Sidebar = async () => {
  const contributors = await get_contributors();

  return (
    <div className="col-span-3 flex flex-col gap-16">
      <div className="flex flex-col gap-6">
        <MarkdownContainer>
          <MadePossibleBy />
        </MarkdownContainer>
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
        <Link href="#" className="flex text-sm hover:text-stone-300">
          How to contribute &rarr;
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        <MarkdownContainer>
          <Contributing />
        </MarkdownContainer>
      </div>
    </div>
  );
};
