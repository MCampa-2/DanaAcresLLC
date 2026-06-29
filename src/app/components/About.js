"use client";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-porcelain text-carbon-black">
      {/* HERO */}
      <section className="bg-beige py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <p className="text-palm-leaf font-semibold uppercase tracking-widest mb-4">
              About Dana Acres
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              More than a petting zoo.
            </h1>

            <p className="text-lg text-onyx/80 leading-relaxed max-w-xl">
              Dana Acres LLC is built around creating meaningful, family-friendly
              experiences with animals that bring joy, connection, and lasting
              memories to every event.
            </p>
          </div>

          <div className="bg-porcelain rounded-[2rem] p-4 shadow-xl">
            <div className="relative w-full h-[360px] md:h-[500px] rounded-[1.5rem] overflow-hidden">
              <Image
                src="/images/owners.jpeg"
                alt="Owners of Dana Acres LLC"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="bg-porcelain py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div className="relative w-full h-[360px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/dana.jpeg"
              alt="Dana with animals at Dana Acres"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-palm-leaf font-semibold uppercase tracking-widest mb-4">
              Our Story
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Bringing farm memories to families and events.
            </h2>

            <p className="text-lg text-onyx/80 leading-relaxed mb-5">
              Dana Acres was created from a love of animals, family, and the
              joy that comes from sharing those experiences with others.
            </p>

            <p className="text-lg text-onyx/80 leading-relaxed">
              Whether it is a birthday party, school visit, wedding, festival,
              or community event, the goal is always the same: to create a fun,
              safe, and memorable experience guests will talk about long after
              the day is over.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-beige py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-palm-leaf font-semibold uppercase tracking-widest">
              What We Care About
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Safe, friendly, and unforgettable experiences.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-porcelain rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-3">Family-Friendly</h3>
              <p className="text-onyx/75 leading-relaxed">
                Experiences designed for children, families, schools, and guests
                of all ages.
              </p>
            </div>

            <div className="bg-porcelain rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-3">Animal-Centered</h3>
              <p className="text-onyx/75 leading-relaxed">
                Friendly animals are at the heart of every event and every
                memory created.
              </p>
            </div>

            <div className="bg-porcelain rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold mb-3">Memorable Events</h3>
              <p className="text-onyx/75 leading-relaxed">
                Every visit is meant to feel personal, joyful, and unique to the
                families and communities Dana Acres serves.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-palm-leaf py-24">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-porcelain leading-tight">
            Ready to create unforgettable memories?
          </h2>

          <p className="text-porcelain/85 mt-6 text-lg">
            Bring Dana Acres to your next birthday, school event, wedding,
            festival, or special occasion.
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
    </main>
  );
}