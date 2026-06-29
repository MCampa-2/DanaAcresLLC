"use client";

import Link from "next/link";

export default function Packages() {
  const packages = [
    {
      title: "Birthday Parties",
      description:
        "A fun, memorable animal experience for children, families, and party guests.",
      details: ["Great for backyard parties", "Friendly animal visits", "Perfect for kids"],
    },
    {
      title: "School Visits",
      description:
        "Educational and hands-on animal experiences for schools, daycares, and groups.",
      details: ["Hands-on learning", "Great for classrooms", "Fun and educational"],
    },
    {
      title: "Weddings & Events",
      description:
        "A unique guest experience for weddings, festivals, and special occasions.",
      details: ["Photo-friendly setup", "Memorable guest experience", "Custom event options"],
    },
  ];

  return (
    <main className="bg-porcelain text-carbon-black">
      <section className="bg-beige py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-palm-leaf font-semibold uppercase tracking-widest mb-4">
            Packages
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Event packages for every occasion.
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-onyx/80 leading-relaxed">
            Dana Acres offers animal experiences for birthdays, schools,
            weddings, festivals, and special events. Final package details can
            be customized based on your event.
          </p>
        </div>
      </section>

      <section className="bg-porcelain py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {packages.map((item) => (
            <div
              key={item.title}
              className="bg-beige rounded-3xl p-8 shadow-sm hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
            >
              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>

              <p className="text-onyx/75 leading-relaxed mb-6">
                {item.description}
              </p>

              <ul className="space-y-3 text-onyx/80">
                {item.details.map((detail) => (
                  <li key={detail}>✓ {detail}</li>
                ))}
              </ul>

              <Link
                href="/booking"
                className="inline-block mt-8 bg-palm-leaf text-porcelain px-6 py-3 rounded-md font-semibold hover:bg-carbon-black transition"
              >
                Request Info
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-palm-leaf py-24">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-porcelain">
            Need a custom package?
          </h2>

          <p className="text-porcelain/85 mt-6 text-lg">
            Every event is different. Contact Dana Acres to discuss what works
            best for your party, school, wedding, or community event.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 bg-porcelain text-carbon-black px-8 py-4 rounded-md font-semibold hover:bg-carbon-black hover:text-porcelain transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}