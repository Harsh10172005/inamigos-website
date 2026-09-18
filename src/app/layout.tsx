import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BackToTop } from "@/components/shared/BackToTop";

export const metadata: Metadata = {
  title: "InAmigos Foundation | Together, We Can Create Change That Lasts",
  description: "Pan-India youth-driven non-profit foundation focused on child education (BachpanShala), women empowerment (Udaan), animal care (Jeev), community relief (Sewa), and environmental restoration (Prakriti).",
  keywords: [
    "InAmigos Foundation",
    "NGO India",
    "BachpanShala",
    "Udaan",
    "Jeev",
    "Prakriti",
    "Sewa",
    "Vikas",
    "Education NGO",
    "Animal Welfare Delhi",
    "Tree Plantation India",
    "Youth Internships NGO"
  ],
  openGraph: {
    title: "InAmigos Foundation | Together, We Can Create Change That Lasts",
    description: "Creating impact through people, purpose & action. Join 30,000+ interns and 200+ volunteers across India.",
    url: "https://inamigosfoundation.org.in",
    siteName: "InAmigos Foundation",
    locale: "en_IN",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/images/inamigos-emblem.png', type: 'image/png' },
    ],
    apple: [
      { url: '/images/inamigos-emblem.png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
