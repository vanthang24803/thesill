"use client"

import Link from "next/link"
import { stories } from "@/components/navigation"

const Store = () => {
  return (
    <Link href={stories.href} className="hover:text-[#009A7B] hover:italic">
      {stories.label}
    </Link>
  )
}

export default Store
