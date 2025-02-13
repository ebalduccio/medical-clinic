import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Amodonto | Clínica de Medicina Orofacial em Salvador",
  description: "Especialistas em implantes, harmonização facial, lentes de contato e Invisalign. Transforme seu sorriso com tecnologia avançada e profissionais qualificados.",
  keywords: [
    "dentista Salvador",
    "implantes dentários",
    "harmonização facial",
    "Invisalign",
    "lentes de contato dental",
    "tratamento de canal",
    "clínica odontológica Salvador",
    "medicina orofacial"
  ],
  authors: [{ name: "Amodonto" }],
  category: "Saúde",
  generator: "Next.js",
  applicationName: "Amodonto",
  referrer: "origin-when-cross-origin",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
  openGraph: {
    title: "Amodonto | Medicina Orofacial em Salvador",
    description: "Especialistas em implantes, harmonização facial, lentes de contato e Invisalign. Transforme seu sorriso com tecnologia avançada.",
    url: "https://amodonto.com.br",
    siteName: "Amodonto",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amodonto | Medicina Orofacial em Salvador",
    description: "Especialistas em implantes, harmonização facial, lentes de contato e Invisalign.",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}