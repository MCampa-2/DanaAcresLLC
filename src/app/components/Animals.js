"use client";

import Image from "next/image";
import Link from "next/link";

export default function Animals() {
  const animals = [
    {
      name: "Sarah",
      type: "Micro/Mini Highland Heifer",
      description:
        "Sarah is a micro/mini Highland Heifer. She is the star of any event! She is the most popular booking. She loves cuddles and will give kisses. She is very gentle and loves all the attention!",
      images: [
        "/images/sarah/sarah1.jpeg",
        "/images/sarah/sarah2.jpeg",
        "/images/sarah/sarah3.jpeg",
        "/images/sarah/sarah4.jpeg",
      ],
    },
    {
      name: "Hazel",
      type: "Nigerian Dwarf Doe",
      description:
        "Hazel is a Nigerian Dwarf doe. She is probably the sweetest girl in the barn! She loves animal crackers and booty scratches. Her best friend is Latte, who she has looked after since Latte was just a month old. Hazel will definitely bring smiles to everyone!",
      images: [
        "/images/hazel/Hazel1.jpeg",
        "/images/hazel/Hazel2.jpeg",
        "/images/hazel/Hazel3.jpeg",
        "/images/hazel/Hazel4.jpeg",
      ],
    },
    {
      name: "Buttercup",
      type: "Nigerian Dwarf Doe",
      description:
        "Buttercup is also a Nigerian Dwarf doe and the half sister to Hazel. Buttercup has quite the unique voice, and you can pick her out from across the pasture by her unique “baaaa!” Buttercup is a seasoned pro at events. She loves cuddles and animal crackers too!",
      images: [
        "/images/buttercup/Buttercup1.jpeg",
        "/images/buttercup/Buttercup2.jpeg",
        "/images/buttercup/Buttercup3.jpeg",
      ],
    },
    {
      name: "Latte",
      type: "Nigerian Dwarf Doe",
      description:
        "Latte is the youngest Nigerian Dwarf at Dana Acres. She loves her big sister Hazel. Latte is on the smaller side because she was a bottle baby. Her favorite thing to do is cuddle up in your lap and take a nap. She is quite the cuddle bug!",
      images: [
        "/images/latte/latte1.jpeg",
        "/images/latte/latte2.jpeg",
        "/images/latte/latte3.jpeg",
      ],
    },
    {
      name: "Annabelle",
      type: "Annabelle is a micro/mini Highland Heifer",
      description: "Fun fact! She is a half sister to Sarah. They share the same dad! Annabelle is the newest addition to Dana Acres and is a little lazier than her big sister Sarah. If you are looking for a laid back girl who will gladly pose for pictures this would be a great pick for your next event!",
      images: [
        "/images/annabelle/annabelle1.jpeg",
        "/images/annabelle/annabelle2.jpeg",
        "/images/annabelle/annabelle3.jpeg",
        "/images/annabelle/annabelle4.jpeg"
      ],
    },
  ];

  return (
    <main className="bg-porcelain text-carbon-black">
      {/* HERO */}
      <section className="bg-beige py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-palm-leaf font-semibold uppercase tracking-widest mb-4">
            Meet The Animals
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Meet the friendly faces of Dana Acres.
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-onyx/80 leading-relaxed">
            Each animal has a unique personality and brings something special
            to every event. Meet the miniature cows and goats that make Dana
            Acres such a memorable experience.
          </p>
        </div>
      </section>

      {/* ANIMAL PROFILES */}
      <section className="bg-porcelain py-24 md:py-28">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {animals.map((animal, animalIndex) => (
            <article
              key={animal.name}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* IMAGE GALLERY */}
              <div
                className={
                  animalIndex % 2 !== 0 ? "lg:order-2" : "lg:order-1"
                }
              >
                <div className="grid grid-cols-2 gap-4">
                  {animal.images.map((src, imageIndex) => (
                    <div
                      key={`${animal.name}-${src}-${imageIndex}`}
                      className={`relative overflow-hidden rounded-3xl bg-beige shadow-sm ${
                        imageIndex === 0
                          ? "col-span-2 h-[340px] md:h-[440px]"
                          : "h-[190px] md:h-[240px]"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`${animal.name} at Dana Acres`}
                        fill
                        sizes={
                          imageIndex === 0
                            ? "(max-width: 1024px) 100vw, 50vw"
                            : "(max-width: 768px) 50vw, 25vw"
                        }
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* ANIMAL INFORMATION */}
              <div
                className={
                  animalIndex % 2 !== 0 ? "lg:order-1" : "lg:order-2"
                }
              >
                <p className="text-palm-leaf font-semibold uppercase tracking-widest">
                  {animal.type}
                </p>

                <h2 className="text-4xl md:text-5xl font-bold mt-3">
                  {animal.name}
                </h2>

                <div className="w-16 h-1 bg-palm-leaf rounded-full my-6" />

                <p className="text-onyx/80 text-lg leading-relaxed">
                  {animal.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link
                    href="/booking"
                    className="bg-palm-leaf text-porcelain px-7 py-3 rounded-md font-semibold text-center hover:bg-carbon-black transition"
                  >
                    Book {animal.name}
                  </Link>

                  <Link
                    href="/contact"
                    className="border border-palm-leaf text-palm-leaf px-7 py-3 rounded-md font-semibold text-center hover:bg-beige transition"
                  >
                    Ask About {animal.name}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* BOOKING CTA */}
      <section className="bg-palm-leaf py-24">
        <div className="max-w-5xl mx-auto text-center px-6">
          <p className="text-porcelain/80 font-semibold uppercase tracking-widest mb-4">
            Bring The Farm To You
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-porcelain">
            Want to meet them in person?
          </h2>

          <p className="text-porcelain/85 mt-6 text-lg leading-relaxed max-w-3xl mx-auto">
            Bring Dana Acres to your next birthday, school visit, wedding,
            festival, or special event and create memories your guests will
            never forget.
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

