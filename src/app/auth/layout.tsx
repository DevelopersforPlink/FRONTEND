import {ReactNode} from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      {/* auth 관련 공통 레이아웃 */}
      {children}
    </div>
  )
}