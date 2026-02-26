"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-[#0f2b4c] text-white px-6 py-4 flex justify-between items-center relative">

      
      <Link href="/">
        <Image 
          src="/logo.webp"
          alt="Houzez Logo"
          width={200}
          height={200}
          className="h-12 w-auto brightness-125 contrast-125 object-contain"
          
        />
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/service">Services</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/admin">Admin</Link>
      </div>

      {/* Mobile */}
      <div 
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        ⋮
      </div>

      {open && (
        <div className="absolute top-16 right-6 bg-white text-black rounded-lg shadow-lg p-4 flex flex-col gap-3 w-40 md:hidden">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/service">Services</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/admin">Admin</Link>
        </div>
      )}
    </nav>
  )
}