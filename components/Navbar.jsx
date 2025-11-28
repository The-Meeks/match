"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md border-b border-gold z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/">
          <img 
            src="/logo.png" 
            alt="The Select Match" 
            className="w-16 cursor-pointer"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-gold font-serif text-lg">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/why-us">Why Choose Us</Link></li>
          <li><Link href="/process">Process</Link></li>
          <li><Link href="/packages">Packages</Link></li>
          <li><Link href="/profile-form">Join</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button 
          className="md:hidden text-gold text-xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black border-t border-gold py-5 px-6">
          <ul className="flex flex-col gap-5 text-gold text-lg font-serif">
            <li><Link onClick={() => setOpen(false)} href="/">Home</Link></li>
            <li><Link onClick={() => setOpen(false)} href="/about">About</Link></li>
            <li><Link onClick={() => setOpen(false)} href="/why-us">Why Choose Us</Link></li>
            <li><Link onClick={() => setOpen(false)} href="/process">Process</Link></li>
            <li><Link onClick={() => setOpen(false)} href="/packages">Packages</Link></li>
            <li><Link onClick={() => setOpen(false)} href="/profile-form">Join</Link></li>
            <li><Link onClick={() => setOpen(false)} href="/contact">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
