"use client";

import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <main className="bg-porcelain text-carbon-black">
      <section className="bg-beige py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-palm-leaf font-semibold uppercase tracking-widest mb-4">
            Contact
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Let’s plan your event.
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-onyx/80 leading-relaxed">
            Have questions about packages, animals, availability, or event
            details? Reach out and Dana Acres will be happy to help.
          </p>
        </div>
      </section>

      <section className="bg-porcelain py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-beige rounded-3xl p-8 md:p-10 shadow-sm">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-5 text-lg text-onyx/80">
              <p>
                <span className="font-semibold text-carbon-black">Phone:</span>{" "}
                815-791-7012
              </p>

              <p>
                <span className="font-semibold text-carbon-black">Email:</span>{" "}
                dana@hwexc.com
              </p>

              <p>
                <span className="font-semibold text-carbon-black">
                  Service Area:
                </span>{" "}
                Based in Clifton, IL
              </p>

              <a
                href="https://www.facebook.com/search_results/?q=Dana+Acres+LLC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-palm-leaf font-semibold hover:text-carbon-black transition"
              >
                <FaFacebookF />
                Facebook
              </a>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-beige rounded-3xl p-8 md:p-10 shadow-sm space-y-6"
          >
            <div>
              <label className="block font-semibold mb-2">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                placeholder="Your name"
                required
                className="w-full rounded-md px-4 py-3 border border-palm-leaf/30 bg-porcelain outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-md px-4 py-3 border border-palm-leaf/30 bg-porcelain outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                placeholder="How can we help?"
                required
                className="w-full rounded-md px-4 py-3 border border-palm-leaf/30 bg-porcelain outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-palm-leaf text-porcelain py-4 rounded-md font-semibold hover:bg-carbon-black transition"
            >
              Send Message
            </button>

            {status && (
              <p className="text-center font-semibold text-palm-leaf">
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}