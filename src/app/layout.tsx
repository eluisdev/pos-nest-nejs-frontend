import type { Metadata } from "next";
import { Outfit } from 'next/font/google'
import "./globals.css";

import Providers from "./providers";

const outfit = Outfit({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: "POS - Next.js",
  description: "POS - Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${outfit.className} bottom-0 left-[-20%] right-0 top-[-10%] rounded-full bg-[radial-gradient(circle_farthest-side,rgb(60,60,60),rgb(0,0,32))]`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}