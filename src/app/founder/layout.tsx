import {ReactNode} from "react";
import Gnb from "@/shared/Gnb";

export default function FounderLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* 창업가 메인 페이지 레이아웃 */}
      <Gnb />
      {children}
    </div>
  )
}