import { getBlurDataUrl } from "@/shared/lib/get-blur-data-url";
import Image from "next/image";

const AVATAR_URL = "/avatar.jpg";

export default async function Home() {
  const blurDataUrl = await getBlurDataUrl(AVATAR_URL);

  return (
    <div className="cursor-default select-none p-6 font-mono md:p-10">
      <div className="flex flex-row items-center gap-4">
        <Image
          priority
          src={AVATAR_URL}
          className="rounded-full"
          alt="avatar"
          width={48}
          height={48}
          placeholder="blur"
          blurDataURL={blurDataUrl}
        />

        <div>
          <h1 className="mb-0.5 text-sm">Maxim Tereshko</h1>
          <p className="text-xs text-neutral-500">@xxtereshko</p>
        </div>
      </div>
    </div>
  );
}
