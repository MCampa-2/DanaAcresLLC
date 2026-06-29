import "./globals.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export const metadata = {
  metadataBase: new URL("https://dana-acres-llc.vercel.app"),

  title: {
    default: "Dana Acres LLC",
    template: "%s | Dana Acres LLC",
  },

  description:
    "Miniature cow and goat experiences for birthdays, weddings, festivals, school visits, and special events throughout Central Illinois.",

  keywords: [
    "Dana Acres LLC",
    "mini cow experiences",
    "miniature cows",
    "goat cuddling",
    "goat experiences",
    "mobile petting zoo",
    "petting zoo Illinois",
    "birthday party animals",
    "school event animals",
    "wedding animal experience",
    "festival entertainment",
    "Central Illinois",
    "Chebanse Illinois",
  ],

  authors: [{ name: "Dana Acres LLC" }],
  creator: "Dana Acres LLC",

  openGraph: {
    title: "Dana Acres LLC",
    description:
      "Miniature cow and goat experiences for birthdays, weddings, festivals, school visits, and special events throughout Central Illinois.",
    url: "https://dana-acres-llc.vercel.app",
    siteName: "Dana Acres LLC",
    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}