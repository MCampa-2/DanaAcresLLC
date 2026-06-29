"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-porcelain border-b border-beige sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Dana Acres Logo"
            width={170}
            height={70}
            className="h-auto w-auto"
            priority
          />
        </Link>

        <div className="hidden md:flex items-center gap-8 text-carbon-black text-sm font-medium">
          <Link href="/" className="hover:text-palm-leaf transition">
            Home
          </Link>
          <Link href="/animals" className="hover:text-palm-leaf transition">
            Animals
          </Link>
          <Link href="/packages" className="hover:text-palm-leaf transition">
            Packages
          </Link>
          <Link href="/about" className="hover:text-palm-leaf transition">
            About
          </Link>
          <Link href="/booking" className="hover:text-palm-leaf transition">
            Booking
          </Link>
          <Link href="/contact" className="hover:text-palm-leaf transition">
            Contact
          </Link>
        </div>

        <Link
          href="/booking"
          className="hidden md:inline-block bg-palm-leaf text-porcelain px-6 py-3 rounded-md text-sm font-semibold hover:bg-carbon-black transition"
        >
          Book Now
        </Link>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-carbon-black text-3xl cursor-pointer"
          aria-label="Toggle mobile menu"
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4 bg-porcelain border-t border-beige text-carbon-black text-sm font-medium">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="hover:text-palm-leaf transition"
          >
            Home
          </Link>

          <Link
            href="/animals"
            onClick={() => setOpen(false)}
            className="hover:text-palm-leaf transition"
          >
            Animals
          </Link>

          <Link
            href="/packages"
            onClick={() => setOpen(false)}
            className="hover:text-palm-leaf transition"
          >
            Packages
          </Link>

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="hover:text-palm-leaf transition"
          >
            About
          </Link>

          <Link
            href="/booking"
            onClick={() => setOpen(false)}
            className="hover:text-palm-leaf transition"
          >
            Booking
          </Link>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="hover:text-palm-leaf transition"
          >
            Contact
          </Link>

          <Link
            href="/booking"
            onClick={() => setOpen(false)}
            className="bg-palm-leaf text-porcelain text-center py-3 rounded-md font-semibold hover:bg-carbon-black transition"
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
}