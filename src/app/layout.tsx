import { Analytics } from "@vercel/analytics/react";
import "animate.css";
import "bear-react-carousel/dist/index.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ClientWrapper from "./ClientWrapper";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Yayasan Padepokan Fatwa Kehidupan",
  description: "Landing Page 1 Fatwa Kehidupan",
  icons: "logo.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>
        <ClientWrapper>{children}</ClientWrapper>
        <Analytics />
      </body>
    </html>
  );
}
