
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import Navbar from "@/components/Navbar";
import SubscribeFooter from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";
import CustomChatbot from "@/components/CustomChatbot";
import ProtectConsole from "@/components/ProtectConsole";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dcodestech.com"),

  title: {
    default:
      "Website & ERP, App Development Company | Dcodes Technologies",
    template: "%s | Dcodes Technologies",
  },

  description:
    "Dcodes Technologies is a web development and IT solutions company in Ahmedabad, offering custom software, mobile apps, and digital marketing services.",

  openGraph: {
    siteName: "Dcodes Technologies",
    type: "website",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",

  name: "Dcodes Technologies",
  url: "https://www.dcodestech.com",
  logo: "https://www.dcodestech.com/logo.png",

  email: "info@dcodestech.com",
  telephone: "+916353653977",

  address: {
    "@type": "PostalAddress",
    streetAddress:
      "B 203, Ganesh Glory 11, Jagatpur Road, SG Highway",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    postalCode: "382470",
    addressCountry: "IN",
  },

  areaServed: [
    {
      "@type": "Country",
      name: "India",
    },
  ],

  sameAs: [
    "https://www.facebook.com/share/1F89hvr99T/",
    "https://www.instagram.com/dcodes_technologies",
    "https://www.linkedin.com/company/dcodes-technologies/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Organization Schema */}
        <script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        <LoadingScreen>
          <Navbar />
          <ProtectConsole />
          {children}
          <Toaster position="top-right" />
          <SubscribeFooter />
          <CustomChatbot />
        </LoadingScreen>
      </body>
    </html>
  );
}
