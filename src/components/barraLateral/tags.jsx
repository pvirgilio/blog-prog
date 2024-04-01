import Link from "next/link";
import { Badge } from "../ui/badge";
import { badgeVariants } from "@/components/ui/badge";

export default function Tags() {
  return (
    <article className="flex flex-col gap-2">
      <h3 className="text-xl font-bold uppercase">tags</h3>
      <article className="flex gap-1 flex-wrap">
        <Link href="#">
          <Badge className="uppercase">Tech</Badge>
        </Link>
        <Link href="#">
          <Badge className="uppercase">ti</Badge>
        </Link>
        <Link href="#">
          <Badge className="uppercase">html</Badge>
        </Link>
        <Link href="#">
          <Badge className="uppercase">css</Badge>
        </Link>
        <Link href="#">
          <Badge className="uppercase">games</Badge>
        </Link>
        <Link href="#">
          <Badge className="uppercase">games</Badge>
        </Link>
        <Link href="#">
          <Badge className="uppercase">games</Badge>
        </Link>
        <Link href="#">
          <Badge className="uppercase">games</Badge>
        </Link>
        <Link href="#">
          <Badge className="uppercase">games</Badge>
        </Link>
        <Link href="#">
          <Badge className="uppercase">games</Badge>
        </Link>
        <Link href="#">
          <Badge className="uppercase">games</Badge>
        </Link>
        <Link href="#">
          <Badge className="uppercase">games</Badge>
        </Link>
        <Link href="#">
          <Badge className="uppercase">games</Badge>
        </Link>
        <Link href="#">
          <Badge className="uppercase">games</Badge>
        </Link>
        <Link href="#">
          <Badge className="uppercase">games</Badge>
        </Link>
        <Link href="#">
          <Badge className="uppercase">games</Badge>
        </Link>
        <Link href="#">
          <Badge className="uppercase">programming</Badge>
        </Link>
      </article>
    </article>
  );
}
