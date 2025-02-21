// p.2
"use client"

import React, { useState } from "react";
import styled from '@emotion/styled';
import CustomColumn from "@/shared/CustomColumn";
import Image from 'next/image';
import * as Typography from '@/app/typography'
import TabMenu from "./components/TabMenu";
import Profile from "@/shared/Profile";
import CommonField from "./components/CommonField";
import FounderTab from "./components/FounderField";
import InvestorTab from "./components/InvestorField";
import CheckboxGroup from "./components/CheckboxGroup";
import Modal from "@/shared/Modal/Modal";
import FilledButton from "@/shared/Button/FIlledButton";
import { useRouter } from "next/navigation";


export default function RegisterProfilePage() {
  const router = useRouter();
  const tabs = ["창업자", "투자자"];
  const [selectedTab, setSelectedTab] = useState<string>(tabs[0]);

  // 창업자 탭 상태
  const [entrepreneurState, setEntrepreneurState] = useState({
    name: "",
    phone: "",
    company: "",
    company_position: "",
    company_email: "",
  });

  // 투자자 탭 상태
  const [investorState, setInvestorState] = useState({
    name: "",
    phone: "",
    company: "",
    company_position: "",
    company_email: "",
    codeValue: "",
    fileSelected: false,
    fileName: null as string | null,
  });

  const [checkedItems, setCheckedItems] = useState({
    allChecked: false,
    items: [
      { label: "개인정보 수집 · 이용 동의", checked: false },
      { label: "개인정보 제 3자 제공 동의", checked: false },
    ]
  });

  const [buttonState, setButtonState] = useState<"default" | "pressed" | "disabled" | "hover">("default");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTabSelect = (tab: string) => {
    setSelectedTab(tab);
  };

  const getCurrentState = () => {
    return selectedTab === "창업자" ? entrepreneurState : investorState;
  };

  const handleUserNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (selectedTab === "창업자") {
      setEntrepreneurState(prev => ({ ...prev, name: value }));
    } else {
      setInvestorState(prev => ({ ...prev, name: value }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (selectedTab === "창업자") {
      setEntrepreneurState(prev => ({ ...prev, phone: value }));
    } else {
      setInvestorState(prev => ({ ...prev, phone: value }));
    }
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (selectedTab === "창업자") {
      setEntrepreneurState(prev => ({ ...prev, company: value }));
    } else {
      setInvestorState(prev => ({ ...prev, company: value }));
    }
  };

  const handlePositionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (selectedTab === "창업자") {
      setEntrepreneurState(prev => ({ ...prev, company_position: value }));
    } else {
      setInvestorState(prev => ({ ...prev, company_position: value }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (selectedTab === "창업자") {
      setEntrepreneurState(prev => ({ ...prev, company_email: value }));
    } else {
      setInvestorState(prev => ({ ...prev, company_email: value }));
    }
  };

  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedTab === "투자자") {
      setInvestorState(prev => ({ ...prev, codeValue: e.target.value }));
    }
  };

  const handleFileSelect = (fileSelected: boolean, fileName: string | null) => {
    setInvestorState(prev => ({ 
      ...prev, 
      fileSelected: fileSelected, fileName: fileName }));
  };

  const handleCheckboxChange = (checkedItems: { label: string; checked: boolean }[]) => {
    setCheckedItems(prev => {
      const allChecked = checkedItems.every(item => item.checked);
      return { ...prev, items: checkedItems, allChecked };
    });
  };


  const isButtonDisabled = (): boolean => {
    if (selectedTab === "창업자") {
      const { name, phone, company, company_position, company_email } = entrepreneurState;
      return !name || !phone || !company || !company_position || !company_email || !checkedItems.allChecked;
    } else {
      const { name, phone, company, company_position, company_email, codeValue, fileSelected } = investorState;
      return !name || !phone || !company || !company_position || !company_email || !codeValue || !fileSelected || !checkedItems.allChecked;
    }
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    setIsModalOpen(true);
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const handleModalConfirm = () => {
    if (selectedTab === "창업자") {
      router.push('/founder');
    } else {
      router.push('/investor');
    }
    setIsModalOpen(false); 
  };


  return (
    <Container>
      <CustomColumn $width="39.375rem" $gap='1.5rem' $alignitems='flex-start' $margin="2.5rem">
        <Image
          src="/SmallLogo.svg"
          alt='smalllogo'
          width={80}
          height={80}
          layout="fixed"
        />
        <Typography.Headline1>
          회원 정보 등록
        </Typography.Headline1>
      </CustomColumn>
      <CustomColumn $gap="40px" $alignitems="center" $justifycontent="center">
        <TabMenu tabs={tabs} onTabSelect={handleTabSelect} />
        <Profile profileImage="" mainIcon="/icons/User.svg" secondaryIcon="/icons/Pic.svg" />
        <CustomColumn $width="100%" $gap="24px" $alignitems="center" $justifycontent="center">
          <CommonField
            userName={getCurrentState().name}
            phone={getCurrentState().phone}
            setUserName={handleUserNameChange}
            setPhone={handlePhoneChange}
            company={getCurrentState().company}
            position={getCurrentState().company_position}
            setCompany={handleCompanyChange}
            setPosition={handlePositionChange}
          />
          {selectedTab === "창업자" && (
            <FounderTab
            company_email={entrepreneurState.company_email}
            setCompany_email={handleEmailChange}
            />
          )}
          {selectedTab === "투자자" && (
            <InvestorTab
              company_email={investorState.company_email}
              setCompany_email={handleEmailChange}
              buttonState={buttonState}
              codeValue={investorState.codeValue}
              handleCodeChange={handleCodeChange}
              handleClick={handleClick}
              onFileSelect={handleFileSelect}
            />
          )}
        </CustomColumn>
        <CheckboxGroup
          topLabel="필수 약관 전체 동의"
          items={checkedItems.items}
          onChange={handleCheckboxChange}
          allChecked={checkedItems.allChecked}
        />

        <FilledButton
          scale="l"
          state={buttonState}
          onClick={handleClick}
          disabled={isButtonDisabled()}
        >
          등록하기
        </FilledButton>
        {isModalOpen && (
          <Modal
            modalText="회원정보 등록이 요청되었어요"
            closeModal={toggleModal}
            modalType="request"
            onConfirm={handleModalConfirm}
          />
        )}
      </CustomColumn>
    </Container>
  );
}


const Container = styled.div`
  width: 100%;
  height: 100vh;
  padding: 5rem 0;
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

