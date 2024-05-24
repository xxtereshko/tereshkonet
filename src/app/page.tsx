import { Button } from "@/shared/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button asChild>
        <Link prefetch href="/notes">
          Click me
        </Link>
      </Button>
    </div>
  );
}
