"use client";

import { useState } from "react";
import Link from "next/link";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    eventType: "Birthday Party",
    eventLocation: "",
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

    const res = await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Booking request sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        eventDate: "",
        eventType: "Birthday Party",
        eventLocation: "",
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
            Booking
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Bring Dana Acres to your next event.
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-onyx/80 leading-relaxed">
            Fill out the booking request below and Dana Acres will follow up
            with availability, package options, and next steps.
          </p>
        </div>
      </section>

      <section className="bg-porcelain py-24">
        <div className="max-w-4xl mx-auto px-6">
          <form
            onSubmit={handleSubmit}
            className="bg-beige rounded-3xl p-8 md:p-10 shadow-sm space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
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
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2">Phone</label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Phone number"
                  required
                  className="w-full rounded-md px-4 py-3 border border-palm-leaf/30 bg-porcelain outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold mb-2">Event Date</label>
                <input
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  type="date"
                  required
                  className="w-full rounded-md px-4 py-3 border border-palm-leaf/30 bg-porcelain outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-2">Event Type</label>
              <select
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full rounded-md px-4 py-3 border border-palm-leaf/30 bg-porcelain outline-none"
              >
                <option>Birthday Party</option>
                <option>School Visit</option>
                <option>Wedding</option>
                <option>Festival</option>
                <option>Other Event</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2">Event Location</label>
              <input
                name="eventLocation"
                value={formData.eventLocation}
                onChange={handleChange}
                type="text"
                placeholder="City, state, or venue address"
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
                placeholder="Tell us about your event..."
                className="w-full rounded-md px-4 py-3 border border-palm-leaf/30 bg-porcelain outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-palm-leaf text-porcelain py-4 rounded-md font-semibold hover:bg-carbon-black transition"
            >
              Submit Booking Request
            </button>

            {status && (
              <p className="text-center font-semibold text-palm-leaf">
                {status}
              </p>
            )}

            <p className="text-sm text-onyx/70 text-center">
              This form is a request only. Dana Acres will confirm availability
              and final details.
            </p>
          </form>
        </div>
      </section>

      <section className="bg-palm-leaf py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-porcelain">
            Have questions before booking?
          </h2>

          <Link
            href="/contact"
            className="inline-block mt-8 bg-porcelain text-carbon-black px-8 py-4 rounded-md font-semibold hover:bg-carbon-black hover:text-porcelain transition"
          >
            Contact Dana Acres
          </Link>
        </div>
      </section>
    </main>
  );
}