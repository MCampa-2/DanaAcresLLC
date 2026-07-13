"use client";

import Link from "next/link";
import Image from "next/image";



import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-cube";

import { FaBirthdayCake, FaHeart, FaLeaf, FaFacebookF } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaSchool } from "react-icons/fa";
import { GiDiamondRing, GiGoat } from "react-icons/gi";
import { MdFestival } from "react-icons/md";


export default function Home() {


const heroImages = [
  "/images/dana.jpeg",
  "/images/owners.jpeg",
  "/images/hero.jpeg",
  "/images/animal1.jpeg",
  "/images/animal2.jpeg",
  "/images/animal3.jpeg",
  "/images/animal4.jpeg",
  "/images/animal5.jpeg",
  "/images/animal6.jpeg",
  "/images/animal7.jpeg",
  "/images/animal8.jpeg",
  "/images/animal9.jpeg",
  "/images/animal10.jpeg",
  "/images/animal11.jpeg",
  "/images/animal12.jpeg",
  "/images/eggs.jpeg"
];

  const animalImages = [
    "/images/hero.jpeg",
    "/images/animal1.jpeg",
    "/images/animal2.jpeg",
    "/images/animal3.jpeg",
    "/images/animal4.jpeg",
    "/images/animal5.jpeg",
    "/images/animal6.jpeg",
    "/images/animal7.jpeg",
    "/images/animal8.jpeg",
    "/images/animal9.jpeg",
    "/images/animal10.jpeg",
    "/images/animal11.jpeg",
    "/images/animal12.jpeg",
    "/images/eggs.jpeg"
  ];

  const hazelImages = [
    "/images/hazel/Hazel1.jpeg",
    "/images/hazel/Hazel2.jpeg",
    "/images/hazel/Hazel3.jpeg",
    "/images/hazel/Hazel4.jpeg"
  ]

  const buttercupImages = [
    "/images/buttercup/Buttercup1.jpeg",
    "/images/buttercup/Buttercup2.jpeg",
    "/images/buttercup/Buttercup3.jpeg",
    "/images/buttercup/Buttercup4.jpeg"
  ]

  const sarahImages = [
    "/images/sarah/sarah1.jpeg",
    "/images/sarah/sarah2.jpeg",
    "/images/sarah/sarah3.jpeg",
    "/images/sarah/sarah4.jpeg"
  ]

  const latteImages = [
    "/images/latte/latte1.jpeg",
    "/images/latte/latte2.jpeg",
    "/images/latte/latte3.jpeg"
  ]

  const annabelle = [
    "/images/annabelle/annabelle1.jpeg",
    "/images/annabelle/annabelle2.jpeg",
    "/images/annabelle/annabelle3.jpeg",
    "/images/annabelle/annabelle4.jpeg"
  ]

  return (
    <main className="bg-porcelain text-carbon-black">
      {/* NAVBAR */}
     

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
              Bring friendly miniature cows and goats to your next birthday party,
              school event, wedding, festival, or special occasion. Dana Acres creates
              memorable, hands-on experiences for guests of all ages.
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
            <Swiper
            modules={[EffectCube, Autoplay]}
            effect="cube"
            grabCursor={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            cubeEffect={{
              shadow: true,
              slideShadows: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
            className="w-full h-full rounded-[1.5rem]"
          >
              {heroImages.map((src, index) => (
                <SwiperSlide key={src}>
                  <div className="relative w-full h-[360px] md:h-[500px]">
                    <Image
                      src={src}
                      alt={`Dana Acres ${index + 1}`}
                      fill
                      priority={index === 0}
                      sizes="(max-width:768px)100vw,50vw"
                      className="object-cover"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
              Mini Cow & Goat Experiences
            </h2>

            <p className="mt-6 text-lg text-onyx/80 leading-relaxed">
              Dana Acres brings friendly miniature cows or goats directly to your
              birthday party, wedding, school, festival, or special event.
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
                Meet our miniature cows and friendly goats.
              </h2>
            </div>

            <p className="text-onyx/75 max-w-md text-lg leading-relaxed">
              From gentle farm animals to hands-on experiences, Dana Acres
              brings the charm of the farm right to your event.
            </p>
          </div>

          {/* CUBE PHOTO ROLL */}
          <div className="max-w-3xl mx-auto">
            <Swiper
              modules={[EffectCube, Autoplay]}
              effect="cube"
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 2600,
                disableOnInteraction: false,
              }}
              cubeEffect={{
                shadow: false,
                slideShadows: false,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              className="rounded-3xl"
            >
              {animalImages.map((src, index) => (
                <SwiperSlide key={src}>
                  <div className="relative w-full h-[360px] md:h-[500px] rounded-3xl overflow-hidden shadow-xl bg-beige">
                    <Image
                      src={src}
                      alt={`Dana Acres animal ${index + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-contain bg-beige"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
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
              Why families choose Dana Acres.
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
              <h3 className="font-bold text-xl mb-3">Travel throughout Northern/Central Illinois</h3>
              <p className="text-onyx/75 leading-relaxed">
               Serving Kankakee/Iroquois/Will Counties and beyond! Travel is available for events up to 
               approximately 75 miles from Clifton, IL with fuel surcharges applying beyond 45 miles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING INFO */}
<section className="bg-porcelain py-24 md:py-28">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center mb-16">
      <p className="text-palm-leaf font-semibold uppercase tracking-widest">
        Booking Information
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-4">
        Everything you need to know.
      </h2>
    </div>

    <div className="grid md:grid-cols-2 gap-8">

      <div className="bg-beige rounded-3xl p-8 shadow-sm">
        <h3 className="text-2xl font-bold mb-6">
          Pricing
        </h3>

        <ul className="space-y-4 text-lg">
          <li>✓ Starting at <strong>$250 per hour</strong></li>
          <li>✓ One-hour minimum booking</li>
          <li>✓ Additional half-hour increments available</li>
          <li>✓ Travel beyond 45 miles will include a fuel surcharge</li>
        </ul>
      </div>

      <div className="bg-beige rounded-3xl p-8 shadow-sm">
        <h3 className="text-2xl font-bold mb-6">
          Reserving Your Date
        </h3>

        <ul className="space-y-4 text-lg">
          <li>✓ Submit a booking request</li>
          <li>✓ Dana Acres will confirm availability</li>
          <li>✓ A $50 non-refundable deposit reserves your date</li>
          <li>✓ Final details are confirmed before your event</li>
        </ul>
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

    </main>
  );
}