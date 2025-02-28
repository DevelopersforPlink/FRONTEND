import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/shared/Footer";

export const metadata: Metadata = {
  title: "Plink ｜ 플러스(주) ｜ PLERS Corporation",
  description: "플링크",
  // 로고 정해지면 주석 풀고 파비콘 추가\
  icons: {
    icon: "/symbol.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
