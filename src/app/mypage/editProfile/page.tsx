"use client";

import React, { useState, useEffect } from "react";
import styled from '@emotion/styled';
import { Headline1 } from '@/app/typography';
import Gnb from "@/shared/Gnb";
import CustomColumn from "@/shared/CustomColumn";
import Profile from "@/shared/Profile";
import CommonField from "./components/CommonField";
import FounderTab from "@/app/auth/registerProfile/components/FounderField";
import InvestorTab from "@/app/auth/registerProfile/components/InvestorField";
import Modal from "@/shared/Modal/Modal";
import FilledButton from "@/shared/Button/FIlledButton";
import { useRouter } from "next/navigation";
import DeleteAccount from "./components/DeleteAccount";
import patchUserClientInfo from "@/api/patch/patchUserClientInfo";
import getUserClientInfoUpdate from "@/api/get/getUserClientInfoUpdate";

export default function EditProfilePage() {
  const router = useRouter();

  const [userData, setUserData] = useState({
    image: "",
    id: "",
    name: "",
    phone: "",
    company: "",
    company_position: "",
    company_email: "",
    certificate_employment: null as string | null,
    client_position: "",
    fileSelected: false,
    fileName: null as string | null,
  });

  const [buttonState, setButtonState] = useState<"default" | "pressed" | "disabled" | "hover">("default");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserClientInfoUpdate(); // 회원 정보 조회
        setUserData(data);
      } catch (error) {
        console.error("회원 정보 조회 실패: ", error);
      }
    };
    fetchData();
  }, []);;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setUserData(prev => ({ ...prev, [field]: e.target.value }));
  };

  const handleFileSelect = (fileSelected: boolean, fileName: string | null) => {
    setUserData(prev => ({
      ...prev,
      fileSelected: fileSelected, fileName: fileName
    }));
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setIsModalOpen(true);
  };

  // 버튼 활성화 상태 
  const isButtonDisabled = (): boolean => {
    if (userData.client_position === "창업자") {
      const { phone, company, company_position, company_email } = userData;
      return  !phone || !company || !company_position || !company_email;
    } else {
      const { phone, company, company_position, company_email, fileSelected } = userData;
      return !phone || !company || !company_position || !company_email || !fileSelected;
    }
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleSubmit = async () => {
    try {
      // 수정된 정보만 보냄
      await patchUserClientInfo(userData); 
      setIsModalOpen(true);
    } catch (error) {
      console.error("회원 정보 수정 실패:", error);
    }
  };


  return (
    <>
      <Gnb />
      <Container>
        <Title>
          내 정보 수정
        </Title>
        <CustomColumn $gap="2.5rem" $alignitems="center" $justifycontent="center" $marginTop="2.5rem">
          <Profile profileImage={userData.image} mainIcon="/icons/User.svg" secondaryIcon="/icons/Pic.svg" />
          <CustomColumn $width="100%" $gap="24px" $alignitems="center" $justifycontent="center">
            <CommonField
              image={userData.image}
              id={userData.id}
              name={userData.name}
              phone={userData.phone}
              company={userData.company}
              company_position={userData.company_position}
              client_position={userData.client_position}
              setId={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'id')}
              setName={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'name')}
              setPhone={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'phone')}
              setCompany={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'company')}
              setCompanyPosition={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'company_position')}
              setClientPosition={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'client_position')}
            />
            {userData.client_position === "창업자" && (
              <FounderTab
                company_email={userData.company_email}
                setCompany_email={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'company_email')}
              />
            )}
            {userData.client_position === "투자자" && (
              <InvestorTab
                company_email={userData.company_email}
                setCompany_email={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, 'company_email')}
                buttonState={buttonState}
                handleClick={handleClick}
                onFileSelect={handleFileSelect}
                codeValue={""}
                handleCodeChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
                  throw new Error("Function not implemented.");
                }}
              />
            )}
          </CustomColumn>
        <FilledButton
          scale="l"
          state={buttonState}
          onClick={handleSubmit}
          disabled={isButtonDisabled()}
        >
          정보 수정
        </FilledButton>
        <DeleteAccount/>
        </CustomColumn>
        {isModalOpen && (
          <Modal
            modalText="내 정보 수정이 요청되었어요"
            closeModal={toggleModal}
            modalType="request"
            onConfirm={() => router.push('/mypage')}
          />
        )}
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 2.5rem 0 11.78rem 0;
  overflow-x: hidden;
  overflow-y: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const Title = styled(Headline1)`
  margin: 2.5rem 0;
  width: 25.875rem;
  align-items: flex-start; 
`
