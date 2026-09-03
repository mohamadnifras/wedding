import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://swahiba-raza-wedding.com"),
  title: "The Wedding of Swahiba & Mohammed Raza | 20 Sept 2026",
  description: "Wedding Invitation of Swahiba & Mohammed Raza. Sunday, 20 September 2026 at Jumeirah Hills Convention Center, Perinthalmanna Road, Chattipparamba. Join us in our celebration of love and blessings.",
  openGraph: {
    title: "Swahiba & Mohammed Raza — Wedding Invitation",
    description: "In the name of Allah, the most Gracious, the most Merciful. Cordially inviting you along with your family on Sunday, 20 September 2026.",
    url: "https://swahiba-raza-wedding.com",
    siteName: "Swahiba & Mohammed Raza Wedding",
    images: [
      {
        url: "/images/cards/card_invitation.png",
        width: 800,
        height: 1200,
        alt: "Swahiba & Mohammed Raza Wedding Invitation Card",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0D1929" />
      </head>
      <body className="min-h-screen bg-[#FCFBF9] text-[#2D3748] antialiased selection:bg-[#D4AF37] selection:text-white">
        {children}
      </body>
    </html>
  );
}
