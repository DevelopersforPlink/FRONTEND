//auth 관련 공통 레이아웃
import CustomColumn from "@/shared/CustomColumn";
import CustomRow from "@/shared/CustomRow";
import {ReactNode} from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <CustomRow>
      <CustomColumn $height="100vh">
        {children}
      </CustomColumn>
    </CustomRow>
  )
}