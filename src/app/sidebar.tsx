import { get_contributors } from "@/lib/contributor";
import Link from "next/link";
import Image from "next/image";
import { Markdown } from "./md";

export const Sidebar = async () => {
  const contributors = await get_contributors();

  return (
    <div className="col-span-3 flex flex-col gap-16">
      <div className="flex flex-col gap-6">
        <Markdown>{`## GPUI is made possible by`}</Markdown>
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
        <Markdown>
          {`
## Contributing to GPUI
GPUI is an open source project. We welcome
contributions, but for the near future GPUI is tied to [Zed](https://zed.dev/), so contributions will
need to be made there and kept in sync with it.
        `}
        </Markdown>
      </div>
    </div>
  );
};
