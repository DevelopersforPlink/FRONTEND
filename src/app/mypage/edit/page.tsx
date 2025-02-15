// p.9
"use client"

import React from "react";
import styled from '@emotion/styled';
import CustomColumn from "@/shared/CustomColumn";
import CustomRow from "@/shared/CustomRow";
import * as Typography from '@/app/typography'
import Profile from "@/shared/Profile";
import FilledButton from "@/shared/Button/FIlledButton";
import { useRouter } from "next/navigation";

export default function MyPage () {
  const router = useRouter();



  return (
    <div>
          <Typography.Headline1>내 정보</Typography.Headline1>

    </div>
  )
}