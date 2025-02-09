// p.0
"use client"

import React, { useState } from 'react'
import NotifiListItem from '@/shared/List/NotifiListItem';

export default function LandingPage() {

  const [state, setState] = useState<"default" | "hover" | "pressed">("default");
  const [status, setStatus] = useState<"default" | "new">("new");

  return (
    <div>
      랜딩페이지
      <NotifiListItem
          state={state}
          status={status}
          profileImage="/globe.svg"
          summitName="첫 써밋"
          rejectionReason="설명 부족"
        // onClick={() => console.log("Item clicked")}
        />
    </div>
  )
}