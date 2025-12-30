import type React from "react"
import type { Metadata } from "next"
import { Inter, Cairo } from "next/font/google"
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-primary",
})

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  variable: "--font-primary",
})

export const metadata: Metadata = {
  title: "Al Mahaba - المحبة | HPL, Formica, Fiber Glass & Compact Laminate",
  description:
    "Leading manufacturer of high-pressure laminate solutions (HPL, Formica, Fiber Glass, Compact). Official Salomil agent in Egypt. فورميكا، فيبر جلاس، كومباكت لامينيت - وكيل سالوميل المعتمد في مصر",
  keywords: [
    // English Keywords
    "HPL Egypt", "High Pressure Laminate", "Formica Egypt", "Fiber Glass Laminate",
    "Compact Laminate", "Double Face HPL", "Postforming Laminate", "Kitchen Countertops",
    "Wall Cladding", "Decorative Laminate", "Salomil Egypt", "Al Mahaba HPL",
    "Laminate Sheets Alexandria", "Commercial Laminate", "Residential Laminate",
    "Hospital Grade Laminate", "Antibacterial Laminate", "Waterproof Laminate",
    "Heat Resistant Laminate", "Scratch Resistant Surface", "Modern Kitchen Design",
    "Cabinet Doors", "Furniture Laminate", "Interior Design Materials",
    // Arabic Keywords
    "فورميكا مصر", "فورميكا الاسكندرية", "HPL مصر", "لامينيت ضغط عالي",
    "فيبر جلاس", "فايبر جلاس لامينيت", "كومباكت لامينيت", "كومباكت مصر",
    "المحبة فورميكا", "سالوميل مصر", "وكيل سالوميل", "لامينيت وجهين",
    "بوست فورمينج", "تشكيل لامينيت", "سطح مطبخ", "كونترتوب",
    "تكسية جدران", "لامينيت ديكور", "لامينيت مقاوم للماء", "لامينيت مضاد للبكتيريا",
    "لامينيت مقاوم للحرارة", "لامينيت مقاوم للخدش", "خزائن مطبخ",
    "أبواب دواليب", "لامينيت أثاث", "مواد تشطيب داخلي", "ديكورات حديثة",
    "لامينيت تجاري", "لامينيت سكني", "لامينيت مستشفيات"
  ],
  generator: "",
  alternates: {
    canonical: "https://almahaba.example/",
    languages: {
      'en': 'https://almahaba.example/en',
      'ar': 'https://almahaba.example/ar',
    },
  },
  openGraph: {
    siteName: "Al Mahaba HPL - المحبة",
    title: "Premium HPL, Formica, Fiber Glass & Compact Laminate | Al Mahaba - المحبة",
    description:
      "Official Salomil agent in Egypt. Premium HPL, Formica, Fiber Glass & Compact Laminate for residential, commercial & hospital applications. وكيل سالوميل المعتمد - فورميكا، فيبر جلاس، كومباكت لامينيت",
    type: "website",
    url: "https://almahaba.example/",
    images: [
      {
        url: "https://example.com/opengraph-almahaba.jpg",
        alt: "Al Mahaba - Premium HPL, Formica, Fiber Glass & Compact Laminate Solutions",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    alternateLocale: ["ar_EG"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium HPL, Formica, Fiber Glass & Compact | Al Mahaba",
    description:
      "Official Salomil agent. Premium HPL, Formica, Fiber Glass & Compact Laminate solutions. فورميكا، فيبر جلاس، كومباكت لامينيت",
    images: [
      {
        url: "https://example.com/opengraph-almahaba.jpg",
        alt: "Al Mahaba Premium Laminate Solutions",
      },
    ],
    site: "@almahaba",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],

  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'} className={`${locale === 'ar' ? cairo.variable : inter.variable} antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": locale === 'ar' ? "المحبة" : "Al Mahaba",
              "alternateName": "Almahba HPL",
              "url": "https://almahaba.example",
              "description": locale === 'ar'
                ? "وكيل سالوميل المعتمد في مصر. متخصصون في فورميكا، فيبر جلاس، كومباكت لامينيت"
                : "Official Salomil agent in Egypt. Specialists in HPL, Formica, Fiber Glass & Compact Laminate",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": locale === 'ar' ? "الإسكندرية" : "Alexandria",
                "addressCountry": "EG"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "availableLanguage": ["English", "Arabic"]
              }
            })
          }}
        />
      </head>
      <NextIntlClientProvider messages={messages}>
        <body className="font-sans bg-neutral-50 text-neutral-900 overflow-x-hidden">{children}</body>
      </NextIntlClientProvider>
    </html>
  )
}
