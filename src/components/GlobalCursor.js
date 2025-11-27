"use client";

import dynamic from "next/dynamic";

const TargetCursor = dynamic(() => import("@/components/TargetCursor"), {
  ssr: false,
});

export default function GlobalCursor() {
  return (
    <TargetCursor
      parallaxOn={true}
      spinDuration={2.2}
      hideDefaultCursor={false}
    />
  );
}
