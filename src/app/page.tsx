import type { Metadata } from "next";
import HomeClient from "@/components/Home/HomeClient";

const SITE = "https://www.dcodestech.com";
const PAGE_TITLE = "Software, Web & Mobile App Development | Dcodes Technologies";
const PAGE_DESC =
  "Dcodes Technologies builds custom software, websites, mobile apps and ERP systems for startups and growing businesses. Tell us about your project.";

export const metadata: Metadata = {
  title: { absolute: PAGE_TITLE },
  description: PAGE_DESC,
  alternates: { canonical: SITE },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Dcodes Technologies",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [{ url: `${SITE}/og-image.jpg` }],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [`${SITE}/og-image.jpg`],
  },
};

const safeJson = (data: unknown) => JSON.stringify(data).replace(/</g, "\\u003c");

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE}/#organization`,
      name: "Dcodes Technologies",
      url: SITE,
      logo: `${SITE}/logo.png`,
      description:
        "Dcodes Technologies is a software development company based in Ahmedabad, India that builds custom software, websites, mobile apps and ERP systems for businesses worldwide.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ahmedabad",
        addressRegion: "Gujarat",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      name: "Dcodes Technologies",
      url: SITE,
      publisher: { "@id": `${SITE}/#organization` },
      inLanguage: "en",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJson(homeJsonLd) }}
      />
      <HomeClient />
    </>
  );
}