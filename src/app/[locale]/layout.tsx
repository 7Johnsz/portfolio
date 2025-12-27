import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Fustat } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import "@/app/globals.css";

const fustat = Fustat({
  subsets: ["latin"],
  variable: "--font-fustat",
});

export const metadata: Metadata = {
  title: "João Victor | Devjohn",
  description: "Seja bem-vindo(a) ao meu mundo!",
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
      <body className={`${fustat.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <Analytics />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
