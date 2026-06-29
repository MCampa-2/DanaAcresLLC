"use client";

import Image from "next/image";
import Link from "next/link";

export default function Animals() {
  const animals = [
    { src: "/images/animal1.jpeg", title: "Friendly Farm Animals" },
    { src: "/images/animal2.jpeg", title: "Gentle Companions" },
    { src: "/images/animal3.jpeg", title: "Event Favorites" },
    { src: "/images/animal4.jpeg", title: "Family-Friendly Fun" },
    { src: "/images/animal5.jpeg", title: "Memorable Moments" },
    { src: "/images/animal6.jpeg", title: "Hands-On Experiences" },
    { src: "/images/animal7.jpeg", title: "Happy Animals" },
    { src: "/images/animal8.jpeg", title: "Perfect for Events" },
    { src: "/images/animal9.jpeg", title: "Farm Fun" },
    { src: "/images/animal10.jpeg", title: "Dana Acres Favorites" },
    { src: "/images/animal11.jpeg", title: "Special Guests" },
    { src: "/images/animal12.jpeg", title: "Animal Encounters" },
  ];

  return (
    <main className="bg-porcelain text-carbon-black">
      <section className="bg-beige py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-palm-leaf font-semibold uppercase tracking-widest mb-4">
            Meet The Animals
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Friendly faces your guests will love.
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-onyx/80 leading-relaxed">
            Dana Acres brings friendly farm animals to birthdays, schools,
            weddings, festivals, and special events.
          </p>
        </div>
      </section>

      <section className="bg-porcelain py-24">
        <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {animals.map((animal) => (
            <div
              key={animal.src}
              className="bg-beige rounded-3xl overflow-hidden shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-full h-80">
                <Image
                  src={animal.src}
                  alt={animal.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold">{animal.title}</h3>
                <p className="text-onyx/75 mt-3 leading-relaxed">
                  A sweet addition to parties, school visits, and special
                  events.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-palm-leaf py-24">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-porcelain">
            Want to meet them in person?
          </h2>

          <p className="text-porcelain/85 mt-6 text-lg">
            Bring Dana Acres to your next event and create memories your guests
            will never forget.
          </p>

          <Link
            href="/booking"
            className="inline-block mt-10 bg-porcelain text-carbon-black px-8 py-4 rounded-md font-semibold hover:bg-carbon-black hover:text-porcelain transition"
          >
            Book Your Event
          </Link>
        </div>
      </section>
    </main>
  );
}