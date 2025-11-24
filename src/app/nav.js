import Link from 'next/link'
import React from 'react'

export default function Nav() {
  return (
    <div className="absolute top-6 z-70 text-white left-6 font-bold text-lg">
      <Link href="/">Portfolio</Link>
    </div>
  )
}
