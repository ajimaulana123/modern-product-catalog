import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BeautyStore",
    template: "%s | BeautyStore",
  },
  description:
    "BeautyStore adalah katalog produk modern yang menampilkan berbagai produk pilihan seperti beauty, lifestyle, dan kebutuhan harian dengan tampilan elegan dan cepat.",
  keywords: [
    "BeautyStore",
    "katalog produk",
    "produk kecantikan",
    "lifestyle products",
    "modern ecommerce",
    "next.js store",
  ],
  authors: [{ name: "BeautyStore Team" }],
  creator: "BeautyStore",
  metadataBase: new URL("https://yourdomain.com"), // ganti saat production

  // 🔥 FAVICON: SATU FILE SAJA
  icons: {
    icon: "/logo.jpg",
    shortcut: "/logo.jpg",
    apple: "/logo.jpg",
  },

  openGraph: {
    title: "BeautyStore - Modern Product Catalog",
    description:
      "Katalog produk modern berisi berbagai produk kecantikan, lifestyle, dan kebutuhan pilihan.",
    url: "https://yourdomain.com",
    siteName: "BeautyStore",
    images: [
      {
        url: "/logo.jpg",
        width: 800,
        height: 800,
        alt: "BeautyStore Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BeautyStore - Modern Product Catalog",
    description:
      "Katalog produk modern untuk beauty dan lifestyle berbasis Next.js.",
    images: ["/logo.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Inter:wght@400;500;700&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-background">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
