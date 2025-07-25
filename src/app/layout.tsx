import { Providers } from "@/components/theme/providers"
import localFont from "next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "João Victor | Devjohn",
  description: "Seja bem-vindo(a) ao meu mundo!",
  keywords: ["João Victor", "Desenvolvedor", "Designer", "UX/UI", "Portfolio", "Devjohn", "Desenvolvimento Web", "Design de Interfaces"],
  authors: [{ name: "João Victor", url: "https://devjohn.com.br" }],
  creator: "João Victor",
  openGraph: {
    title: "João Victor | Devjohn",
    description: "Seja bem-vindo(a) ao meu mundo!",
    url: "https://devjohn.com.br",
    siteName: "Devjohn",
    // images: [
    //   {
    //     url: "https://devjohn.com.br/",
    //     width: 1200,
    //     height: 630,
    //     alt: "João Victor | Devjohn",
    //   },
    // ],
    locale: "pt-BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
