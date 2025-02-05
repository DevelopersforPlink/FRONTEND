import type { Metadata } from "next";
import "./globals.css";

import { LandingHeader } from "./landing/landingHeader";

export const metadata: Metadata = {
  title: "Plink",
  description: "플링크",
  // 로고 정해지면 주석 풀고 파비콘 추가
  // icons: {
  //   icon: "/logo_TapImg.png",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LandingHeader>디자인 시스템 테스트</LandingHeader>
        {children}
      </body>
    </html>
  );
}
