"use client";

import Link from "next/link";
import Image from "next/image";

import { FaBirthdayCake, FaHeart, FaLeaf, FaFacebookF } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa";
import { GiDiamondRing, GiGoat } from "react-icons/gi";
import { MdFestival } from "react-icons/md";

export default function Home() {
  return (
    <main className="bg-porcelain text-carbon-black">
      {/* NAVBAR */}
      <nav className="w-full bg-porcelain border-b border-beige sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Dana Acres Logo"
              width={170}
              height={70}
              className="h-auto"
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

      {/* HERO */}
      <section className="bg-porcelain">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-palm-leaf font-semibold mb-4 uppercase tracking-widest">
              Dana Acres LLC
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-carbon-black leading-tight mb-6">
              Bring the farm fun to your next event.
            </h1>

            <p className="text-onyx/80 text-lg leading-relaxed mb-8 max-w-xl">
              Friendly animals, memorable experiences, and family-friendly fun
              for birthdays, schools, weddings, parties, and special events.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/booking"
                className="bg-palm-leaf text-porcelain px-7 py-3 rounded-md font-semibold text-center hover:bg-carbon-black transition"
              >
                Book Your Event
              </Link>

              <Link
                href="/animals"
                className="border border-palm-leaf text-palm-leaf px-7 py-3 rounded-md font-semibold text-center hover:bg-beige transition"
              >
                Meet the Animals
              </Link>
            </div>
          </div>

        <div className="relative bg-beige rounded-[2rem] p-4 shadow-xl">
        <div className="relative w-full h-[360px] md:h-[500px] rounded-[1.5rem] overflow-hidden shadow-2xl">
          <Image
            src="/images/hero.jpeg"
            alt="Children petting farm animals at Dana Acres"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>
       </div> 
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <section className="bg-beige py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-palm-leaf font-semibold uppercase tracking-widest">
              What We Offer
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-carbon-black mt-4 leading-tight">
              Creating unforgettable memories for every occasion.
            </h2>

            <p className="mt-6 text-lg text-onyx/80 leading-relaxed">
              Our friendly animals create experiences that children and adults
              will remember long after the event is over.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-porcelain rounded-2xl p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <FaBirthdayCake className="text-palm-leaf text-4xl" />
              <h3 className="font-bold text-xl mt-5">Birthday Parties</h3>
            </div>

            <div className="bg-porcelain rounded-2xl p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <FaSchool className="text-palm-leaf text-4xl" />
              <h3 className="font-bold text-xl mt-5">School Visits</h3>
            </div>

            <div className="bg-porcelain rounded-2xl p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <GiDiamondRing className="text-palm-leaf text-4xl" />
              <h3 className="font-bold text-xl mt-5">Weddings</h3>
            </div>

            <div className="bg-porcelain rounded-2xl p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <MdFestival className="text-palm-leaf text-4xl" />
              <h3 className="font-bold text-xl mt-5">Festivals</h3>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED ANIMALS */}
      <section className="bg-porcelain py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <p className="text-palm-leaf font-semibold uppercase tracking-widest">
                Meet The Animals
              </p>

              <h2 className="text-4xl md:text-5xl font-bold text-carbon-black mt-4">
                Friendly faces your guests will love.
              </h2>
            </div>

            <p className="text-onyx/75 max-w-md text-lg leading-relaxed">
              From gentle farm animals to hands-on experiences, Dana Acres
              brings the charm of the farm right to your event.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-3xl shadow-sm">
              <img
                src="/images/animal1.jpeg"
                alt="Dana Acres animal"
                className="w-full h-80 object-cover hover:scale-105 transition-all duration-500"
              />
            </div>

            <div className="overflow-hidden rounded-3xl shadow-sm">
              <img
                src="/images/animal2.jpeg"
                alt="Dana Acres animal"
                className="w-full h-80 object-cover hover:scale-105 transition-all duration-500"
              />
            </div>

            <div className="overflow-hidden rounded-3xl shadow-sm">
              <img
                src="/images/animal3.jpeg"
                alt="Dana Acres animal"
                className="w-full h-80 object-cover hover:scale-105 transition-all duration-500"
              />
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/animals"
              className="inline-block border border-palm-leaf text-palm-leaf px-7 py-3 rounded-md font-semibold hover:bg-beige transition"
            >
              View All Animals
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-beige py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-palm-leaf font-semibold uppercase tracking-widest">
              Why Families Choose Us
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-carbon-black mt-4">
              More than just a petting zoo.
            </h2>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-onyx/80 leading-relaxed">
              We believe every event deserves a memorable experience. Our
              friendly animals and personalized service help create moments your
              guests will remember for years.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-porcelain rounded-2xl p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <GiGoat className="text-palm-leaf text-4xl mb-5" />
              <h3 className="font-bold text-xl mb-3">Friendly Animals</h3>
              <p className="text-onyx/75 leading-relaxed">
                Gentle animals that guests of all ages can enjoy.
              </p>
            </div>

            <div className="bg-porcelain rounded-2xl p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <FaPeopleGroup className="text-palm-leaf text-4xl mb-5" />
              <h3 className="font-bold text-xl mb-3">Memorable Events</h3>
              <p className="text-onyx/75 leading-relaxed">
                Perfect for birthdays, schools, weddings, and festivals.
              </p>
            </div>

            <div className="bg-porcelain rounded-2xl p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <FaHeart className="text-palm-leaf text-4xl mb-5" />
              <h3 className="font-bold text-xl mb-3">Family Focused</h3>
              <p className="text-onyx/75 leading-relaxed">
                Creating safe, fun experiences everyone can enjoy together.
              </p>
            </div>

            <div className="bg-porcelain rounded-2xl p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <FaLeaf className="text-palm-leaf text-4xl mb-5" />
              <h3 className="font-bold text-xl mb-3">Local & Reliable</h3>
              <p className="text-onyx/75 leading-relaxed">
                Proudly serving families and communities with dependable
                service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-palm-leaf py-24 md:py-28">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-porcelain leading-tight">
            Ready to bring the farm to your next event?
          </h2>

          <p className="text-porcelain/85 mt-6 text-lg leading-relaxed">
            We'd love to help create an unforgettable experience for your
            family, school, or community event.
          </p>

          <div className="flex justify-center gap-4 mt-10 flex-wrap">
            <Link
              href="/booking"
              className="bg-porcelain text-carbon-black px-8 py-4 rounded-md font-semibold hover:bg-carbon-black hover:text-porcelain transition"
            >
              Book Now
            </Link>

            <Link
              href="/contact"
              className="border border-porcelain text-porcelain px-8 py-4 rounded-md font-semibold hover:bg-porcelain hover:text-carbon-black transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-onyx text-porcelain py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          <div>
            <Image
              src="/images/logo.png"
              alt="Dana Acres Logo"
              width={150}
              height={60}
              className="mb-5"
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
    </main>
  );
}