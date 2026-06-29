export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://dana-acres-llc.vercel.app/sitemap.xml",
  };
}