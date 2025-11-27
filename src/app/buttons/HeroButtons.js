"use client";

import Link from "next/link";

export default function HeroButtons() {
  return (
    <div className="flex space-x-4">
      <Link href="/projects">
        <button className="cursor-target px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          View Projects
        </button>
      </Link>

      <Link href="/resume">
        <button className="cursor-target px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition">
          Resume
        </button>
      </Link>
    </div>
  );
}
