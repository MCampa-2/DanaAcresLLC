"use client";
import Link from "next/link";
import Image from "next/image";

export function Navbar(){
    return(
         <nav className="w-full bg-porcelain border-b border-beige sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
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

          <button className="md:hidden text-carbon-black text-3xl">☰</button>
        </div>
      </nav>
    )
}