"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";

export function Footer(){
    return(
      <footer className="bg-onyx text-porcelain py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <Image
              src="/images/logo.png"
              alt="Dana Acres Logo"
              width={150}
              height={60}
              className="mb-5 h-auto"
            />

            <p className="text-porcelain/70 leading-relaxed max-w-sm">
              Friendly farm experiences for birthdays, schools, weddings,
              parties, and special events.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>

            <div className="flex flex-col gap-3 text-porcelain/70">
              <Link href="/" className="hover:text-porcelain transition">
                Home
              </Link>
              <Link href="/animals" className="hover:text-porcelain transition">
                Animals
              </Link>
              <Link
                href="/packages"
                className="hover:text-porcelain transition"
              >
                Packages
              </Link>
              <Link href="/booking" className="hover:text-porcelain transition">
                Booking
              </Link>
              <Link href="/contact" className="hover:text-porcelain transition">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>

            <div className="flex flex-col gap-3 text-porcelain/70">
              <p>Phone: Coming Soon</p>
              <p>Email: Coming Soon</p>

              <a
                href="#"
                className="flex items-center gap-3 hover:text-porcelain transition"
              >
                <FaFacebookF />
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-porcelain/10 text-sm text-porcelain/50">
          © 2026 Dana Acres LLC. All rights reserved.
        </div>
      </footer>
    )
}