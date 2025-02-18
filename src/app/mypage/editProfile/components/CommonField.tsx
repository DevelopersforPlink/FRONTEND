import React, { useState } from "react";
import CustomColumn from "@/shared/CustomColumn";
import Profile from "@/shared/Profile";
import InputFormField from "@/shared/Combination/InputFormField";
import InputGroupFormField from "@/shared/Combination/InputGroupFormField";
import RadioFormField from '@/shared/Combination/RadioFormField';

// 전화번호 (000-0000-0000 형태)
const isValidPhoneNumber = (value: string) => {
  const regex = /^\d{3}-\d{4}-\d{4}$/;
  return regex.test(value);
};

interface CommonFieldProps {
  username: string;
  image: string;
  name: string;
  phone: string;
  company: string;
  company_position: string;
  client_position: string;
  setUsername: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPhone: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  setCompany: (e: React.ChangeEvent<HTMLInputElement>) => void; 
  setCompanyPosition: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setClientPosition: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CommonField: React.FC<CommonFieldProps> = ({
  image,
  username,
  name,
  phone,
  client_position,
  company,
  company_position,
  setUsername,
  setName,
  setPhone,
  setClientPosition,
  setCompany,
  setCompanyPosition,
}) => {


  const isPhoneEmpty = phone.trim() === '';

  const radioOptions = [
    { label: "창업가", value: "founder" },
    { label: "투자자", value: "investor" },
  ];

  const handleSubmit = async () => {

  }

  return (
    <CustomColumn $width="100%" $gap="24px" $alignitems="center" $justifycontent="center">
      <InputFormField
        label="아이디"
        required={true}
        value={username}
        onChange={setUsername}
        placeholder="아이디"
        disabled={true}
      />
      <InputFormField
        label="이름"
        required={true}
        value={name}
        onChange={setName}
        placeholder="이름"
        disabled={true}
      />
      <InputFormField
        label="전화번호"
        required={true}
        value={phone}
        onChange={setPhone}
        placeholder="000-0000-0000"
        captionPosition="after"
        caption={!isValidPhoneNumber(phone) && !isPhoneEmpty ? "전화번호 형식이 올바르지 않습니다." : ''}
        error={!isValidPhoneNumber(phone)}
      />
      <RadioFormField
        label="회원 유형"
        options={radioOptions}
        name="client_position"
        checkedValue={client_position}
        onChange={setClientPosition} 
        disabled={true}
      />
      <InputGroupFormField
        label="소속 회사 및 직무"
        fields={[
          {
            value: company,
            onChange: (e) => setCompany(e),
            placeholder: "소속 회사",
            scale: "l",
          },
          {
            value: company_position,
            onChange: (e) => setCompanyPosition(e),
            placeholder: "예) 기획자",
            scale: "l",
          },
        ]}
      />
    </CustomColumn>
  );
};

export default CommonField;
