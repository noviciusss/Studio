import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "सागर प्रेस | Sagar Press — Gadwara Tiraha, Pratapgarh",
  description:
    "सागर प्रेस — प्रतापगढ़ का भरोसेमंद प्रेस। शादी की फोटोग्राफी, प्रिंटिंग और सरकारी सेवाएं। Trusted printing press in Pratapgarh offering wedding photography, printing, and government document services. Call: 9415415800",
  keywords: [
    "सागर प्रेस",
    "Sagar Press",
    "Pratapgarh",
    "प्रतापगढ़",
    "photography",
    "printing",
    "passport photo",
    "PAN card",
    "wedding photography",
    "Gadwara Tiraha",
    "गड़वारा तिराहा",
    "press Pratapgarh",
  ],
  openGraph: {
    title: "सागर प्रेस | Sagar Press — Pratapgarh",
    description:
      "प्रतापगढ़ का भरोसेमंद प्रेस — शादी की फोटोग्राफी, प्रिंटिंग और सरकारी सेवाएं।",
    type: "website",
    locale: "hi_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sagar Press — Pratapgarh's Trusted Printing Press",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sagar Press — Pratapgarh",
    description: "Trusted printing, photography and government services in Pratapgarh.",
    images: ["/og-image.png"],
  },
};

// LocalBusiness JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Sagar Press",
  alternateName: "सागर प्रेस",
  image: "/og-image.png",
  description:
    "Professional printing press in Pratapgarh offering wedding photography, printing, and government document services.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gadwara Tiraha",
    addressLocality: "Pratapgarh",
    addressRegion: "Uttar Pradesh",
    postalCode: "230502",
    addressCountry: "IN",
  },
  telephone: "+91-9415415800",
  openingHours: "Mo-Su 09:00-20:00",
  priceRange: "₹",
  geo: {
    "@type": "GeoCoordinates",
    latitude: "25.8960",
    longitude: "81.9815",
  },
  sameAs: ["https://wa.me/919415415800"],
  hasMap: "https://maps.app.goo.gl/qEgnYj78iWgBMDz39",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi" className="h-full scroll-smooth">
      <head>
        {/* Font preloading for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* LocalBusiness structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-[#fbf6ee] text-[#2b2320] antialiased">
        {children}
      </body>
    </html>
  );
}
