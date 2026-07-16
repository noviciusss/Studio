import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "सागर स्टूडियो | Sagar Studio — Gadwara Tiraha, Pratapgarh",
  description:
    "सागर स्टूडियो — फोटोग्राफी, प्रिंटिंग और सरकारी सेवाएं। गड़वारा तिराहा, प्रतापगढ़। Professional photography, printing and digital government services at Gadwara Tiraha, Pratapgarh. Call: 9415415800",
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
      "फोटोग्राफी, प्रिंटिंग और सरकारी सेवाएं — प्रतापगढ़।",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sagar Studio Pratapgarh",
      },
    ],
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
