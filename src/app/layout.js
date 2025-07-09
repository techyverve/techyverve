import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "TechyVerve",
    template: "%s | TechyVerve"
  },
  description: "TechyVerve is a leading software development company specializing in web applications, mobile apps, and custom software solutions. Transform your business with cutting-edge technology.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "custom software",
    "technology solutions",
    "programming services",
    "software company"
  ],
  authors: [{ name: "TechyVerve Team" }],
  creator: "TechyVerve",
  publisher: "TechyVerve",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.techyverve.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "TechyVerve - Professional Software Development Company",
    description: "Transform your business with cutting-edge software solutions from TechyVerve. Expert web development, mobile apps, and custom software services.",
    url: "https://techyverve.in",
    siteName: "TechyVerve",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "TechyVerve - Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechyVerve",
    description: "Transform your business with cutting-edge software solutions from TechyVerve.",
    creator: "@techyverve",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "googleb0bc0f05c7b9ec72.html",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Structured data for organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "TechyVerve",
              "description": "Professional software development company specializing in web applications, mobile apps, and custom software solutions.",
              "url": "https://techyverve.in",
              "logo": "https://techyverve.in/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "areaServed": "Worldwide",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://twitter.com/techyverve",
                "https://linkedin.com/company/techyverve",
                "https://github.com/techyverve"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}