"use client";
import Link from "next/link";
import dynamic from "next/dynamic";

const TargetCursor = dynamic(() => import("../components/TargetCursor"), { ssr: false });

export default function Nav() {
  return (
    <>
      <div className="fixed top-6 z-70 text-white left-6 font-bold">
        <Link href="/" className="text-4xl cursor-target">
          RIFAT
        </Link>
      </div>
    </>
  );
}
