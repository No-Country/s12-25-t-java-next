"use client"
import { useRouter } from "next/navigation";
import { HeaderBackIcon } from "./icons";

export default function HeaderBack({
  text,
  children,
}: {
  text: string;
  children?: React.ReactNode;
}) {
  const route = useRouter()
  return (
    <header className="sticky top-0 z-[99] flex justify-between items-center  w-screen h-[6.5rem] bg-primary-100 overflow-hidden">
      <div className="flex items-center">
        <span className="cursor-pointer" onClick={() => route.back()}>
          <HeaderBackIcon />
        </span>
        <h2 className="text-white font-sans text-[22px] font-semibold ml-1">{text}</h2>
      </div>

      {children}
    </header>
  );
}
