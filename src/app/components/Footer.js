"use client";

import Link from "next/link";
import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-onyx text-porcelain py-14">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Logo & Description */}
        <div>
          <Image
            src="/images/logo.png"
            alt="Dana Acres Logo"
            width={150}
            height={60}
            className="mb-5 h-auto"
          />

          <p className="text-porcelain/70 leading-relaxed max-w-sm">
            Creating unforgettable farm experiences with miniature Highland
            cattle and friendly farm animals for birthdays, schools, weddings,
            festivals, and special events.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>

          <div className="flex flex-col gap-3 text-porcelain/70">
            <Link href="/" className="hover:text-porcelain transition">
              Home
            </Link>

            <Link
              href="/animals"
              className="hover:text-porcelain transition"
            >
              Animals
            </Link>

            <Link
              href="/packages"
              className="hover:text-porcelain transition"
            >
              Packages
            </Link>

            <Link
              href="/about"
              className="hover:text-porcelain transition"
            >
              About
            </Link>

            <Link
              href="/booking"
              className="hover:text-porcelain transition"
            >
              Booking
            </Link>

            <Link
              href="/contact"
              className="hover:text-porcelain transition"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>

          <div className="flex flex-col gap-3 text-porcelain/70">
            <p>
              <span className="font-semibold text-porcelain">Phone:</span>{" "}
              <a
                href="tel:8157907012"
                className="hover:text-porcelain transition"
              >
                815-791-7012
              </a>
            </p>

            <p>
              <span className="font-semibold text-porcelain">Email:</span>{" "}
              <a
                href="mailto:dana@hwexc.com"
                className="hover:text-porcelain transition"
              >
                dana@hwexc.com
              </a>
            </p>

            <p>
              <span className="font-semibold text-porcelain">
                Service Area:
              </span>{" "}
              Based in Chebanse, IL
            </p>

            <a
              href="https://www.facebook.com/search_results/?q=Dana+Acres+LLC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 hover:text-porcelain transition"
            >
              <FaFacebookF />
              Follow us on Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-porcelain/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-porcelain/50">
        <p>© 2026 Dana Acres LLC. All rights reserved.</p>

        <p>
          Designed & Developed by{" "}
          <span className="text-porcelain font-medium">Mike Campagnoli</span>
        </p>
      </div>
    </footer>
  );
}