import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local"

const montserrat = Montserrat({ subsets: ["latin"] });

const lovechild = localFont ({
  src: "../../public/assets/typo/lovechild_regular.woff2",
  display: "swap"
})

export const metadata: Metadata = {
  title: "Espacio amapola",
  description: "Un lugar para abrazar tu maternidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lovechild.className}>{children}</body>
    </html>
  );
}
