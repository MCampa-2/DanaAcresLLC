import "./globals.css";


export const metadata = {
  title: "Dana Acres LLC",
  description: "Mini cow and goat cuddling experiences for parties, weddings, festivals, school events, and special occasions.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
    >
      <body>{children}</body>
    </html>
  );
}
