import { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const securityHeaders = [
  // MIME sniffing band
  { key: "X-Content-Type-Options", value: "nosniff" },
  // Tamari site ne bija site ma iframe ma khulva thi roke che (clickjacking)
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  // Bija site par jata URL ni vigat ochhi shared thay
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Camera/location (QR scanner, map) mate (self) rakhyu che. Na vaparta ho to () kari do.
  { key: "Permissions-Policy", value: "camera=(self), microphone=(), geolocation=(self), payment=()" },
];

// CSP pehla "Report-Only" ma: kai block nathi karto, fakt browser Console ma warning aape che.
// Console ma jaruri script/image block thati dekhay to ahi domain umero, pachi enforce karo.
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data: https://fonts.gstatic.com",
  "media-src 'self' https://videos.pexels.com",
  "connect-src 'self' https:",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // images.domains deprecated che, etle remotePatterns
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "dcodestech.com" },
      { protocol: "https", hostname: "cdn-ikpplpn.nitrocdn.com" },
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          ...securityHeaders,
          { key: "Content-Security-Policy-Report-Only", value: csp },
        ],
      },
    ];
  },

  // Ignore TypeScript errors during build
  typescript: {
    ignoreBuildErrors: true,
  },

  // Ignore ESLint errors during build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;