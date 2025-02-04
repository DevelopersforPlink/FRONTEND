import {ReactNode} from "react";

export default function InvestorLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* 투자자 메인 페이지 레이아웃 */}
      {children}
    </div>
  )
}