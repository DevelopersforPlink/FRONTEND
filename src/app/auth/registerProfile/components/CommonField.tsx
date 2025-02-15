// CommonField.tsx
import React from "react";
import CustomColumn from "@/shared/CustomColumn";
import InputFormField from "../../../../shared/Combination/InputFormField";
import InputGroupFormField from "@/shared/Combination/InputGroupFormField";

// 전화번호 (000-0000-0000 형태)
const isValidPhoneNumber = (value: string) => {
  const regex = /^\d{3}-\d{4}-\d{4}$/;
  return regex.test(value);
};

interface CommonFieldProps {
  userName: string;
  phone: string;
  setUserName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPhone: (e: React.ChangeEvent<HTMLInputElement>) => void;
  company: string;
  position: string;
  setCompany: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setPosition: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CommonField: React.FC<CommonFieldProps> = ({
  userName,
  phone,
  setUserName,
  setPhone,
  company,
  position,
  setCompany,
  setPosition
}) => {

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e);
  };

  const isPhoneEmpty = phone.trim() === '';


  return (
    <CustomColumn $width="100%" $gap="24px" $alignitems="center" $justifycontent="center">
      <InputFormField
        label="이름"
        required={true}
        value={userName}
        onChange={setUserName}
        placeholder="이름"
      />
      <InputFormField
        label="전화번호"
        required={true}
        value={phone}
        onChange={handlePhoneChange}
        placeholder="000-0000-0000"
        captionPosition="after"
        caption={!isValidPhoneNumber(phone) && !isPhoneEmpty ? "전화번호 형식이 올바르지 않습니다." : ''}
        error={!isValidPhoneNumber(phone)}
      />
      <InputGroupFormField
        label="소속 회사 및 직무"
        fields={[
          {
            value: company,
            onChange: setCompany,
            placeholder: "소속 회사",
            scale: "l",
          },
          {
            value: position,
            onChange: setPosition,
            placeholder: "예) 기획자",
            scale: "l",
          },
        ]}
      />
    </CustomColumn>
  );
};

export default CommonField;