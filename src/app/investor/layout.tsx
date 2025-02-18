import {ReactNode} from "react";
import Gnb from "@/shared/Gnb";

export default function InvestorLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* 투자자 메인 페이지 레이아웃 */}
      <Gnb />
      {children}
    </div>
  )
}