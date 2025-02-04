import {ReactNode} from "react";

export default function FounderLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* 창업가 메인 페이지 레이아웃 */}
      {children}
    </div>
  )
}