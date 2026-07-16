import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "सागर स्टूडियो | Sagar Studio — Gadwara Tiraha, Pratapgarh",
  description:
    "सागर स्टूडियो — फोटोग्राफी, प्रिंटिंग और सरकारी सेवाएं। गड़वारा तिराहा, प्रतापगढ़ में 1980 से। Photography, printing & government services at Gadwara Tiraha, Pratapgarh UP since 1980. Call: 9415415800",
  keywords: [
    "सागर स्टूडियो",
    "Sagar Studio",
    "Pratapgarh",
    "photography",
    "printing",
    "passport photo",
    "PAN card",
    "wedding photography",
    "Gadwara Tiraha",
  ],
  openGraph: {
    title: "सागर स्टूडियो | Sagar Studio — Pratapgarh",
    description:
      "फोटोग्राफी, प्रिंटिंग और सरकारी सेवाएं — 1980 से आपके साथ।",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className="h-full scroll-smooth">
      <body className="min-h-full bg-[#fbf6ee] text-[#2b2320] antialiased">
        {children}
      </body>
    </html>
  );
}
