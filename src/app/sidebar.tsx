import { get_contributors } from "@/lib/contributor";
import clsx from "clsx";
import Link from "next/link";
import Image from "next/image";

export const Sidebar = async () => {
  const contributors = await get_contributors();

  return (
    <div className="col-span-3 flex flex-col gap-16">
      <div className="flex flex-col gap-4">
        <h2
          className={clsx(
            "grow-0 gap-3 py-2 italic",
            "max-w-2xl leading-tight text-stone-200",
          )}
        >
          GPUI is made possible by:
        </h2>
        <div className="flex flex-wrap gap-3">
          {contributors.map((contributor) => (
            <Link
              key={contributor.handle}
              href={contributor.url}
              title={contributor.handle}
              className="flex items-center"
            >
              <Image
                src={contributor.avatar}
                alt={contributor.handle}
                width={64}
                height={64}
                className="h-8 w-8 rounded-md"
              />
            </Link>
          ))}
        </div>
        <Link href="#" className="flex text-sm hover:text-stone-300">
          How to contribute &rarr;
        </Link>
      </div>
    </div>
  );
};
