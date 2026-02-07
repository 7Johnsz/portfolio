import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import "@/app/globals.css";

import { Figtree, Doto, JetBrains_Mono } from "next/font/google";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

const doto = Doto({
  subsets: ["latin"],
  variable: "--font-doto",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "João Victor",
  description: "Seja bem-vindo(a) ao meu mundo!",
  openGraph: {
    title: "João Victor",
    description: "Seja bem-vindo(a) ao meu mundo!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "João Victor - Portfolio",
      },
    ],
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${figtree.variable} ${doto.variable} ${jetbrainsMono.variable} figtree-font antialiased dark`}>
        <NextIntlClientProvider messages={messages}>
          <Analytics />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
