"use client";

import { useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";
import PageWrapper from "./PageWrapper";

export default function PageNav() {
  const router = useRouter();
  return (
    <nav className="w-full py-4 px-4 flex items-center gap-4 sticky top-0 bg-black z-20">
      <div
        onClick={() => router.push("/")}
        className="flex w-fit hover:-translate-y-2 items-center gap-1 text-white/80 hover:text-white cursor-pointer group md:pt-0">
        <IoIosArrowBack size={30} />
        <p>Home</p>
      </div>
    </nav>
  );
}
