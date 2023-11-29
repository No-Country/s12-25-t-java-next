"use client"

import Link from "next/link";
import { usePathname} from "next/navigation";

export default function ActiveButton({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  
  const pathname = usePathname()
  const isActive = pathname === slug || pathname === "/" && slug === "/Platos"
  
  return (
    <Link
      href={slug}
      className={`rounded-[32px] text-xs w-[88px] h-10 border border-primary-100 
      ${isActive ? " bg-primary-300 rounded-[32px] " : "bg-zinc-100 text-zinc-600"}`}
    >
      {children}
    </Link>
  );
}
