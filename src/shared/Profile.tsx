import React, { useState } from 'react';
import styled from '@emotion/styled';

interface ProfileProps {
  profileImage?: string;
  mainIcon: string;
  secondaryIcon: string;
}

const ProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

const CircleWrapper = styled.div`
  width: 280px;
  height: 280px;
  border: 1px solid var(--gray-scale-20);
  position: relative;
  background-color: var(--common-white);
  border-radius: 50%;
  mask: radial-gradient(circle at 92.5% 90.5%, transparent 10%, var(--gray-scale-80) 10%);
  z-index: 2;
`;

const InnerCircle = styled.div<{ hasProfileImage: boolean }>`
  width: 242px;
  height: 242px;
  background-color: var(--gray-scale-30);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  ${({ hasProfileImage }) =>
    hasProfileImage && `background-color: var(--common-white);`}
`;

const Icon = styled.div`
  color: var(--gray-scale-80);
  border-radius: 50%;
`;

const SmallCircle = styled.div`
  width: 62px;
  height: 62px;
  border: 1px solid var(--gray-scale-20);
  background-color: var(--common-white);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0 0 4px ;
  position: absolute;
  top: 185px;
  left: 190px;
  transform: translate(50%, 50%);
  mask: radial-gradient(circle at 25% 25%, transparent 1%, var(--gray-scale-80) 10%);
  z-index: 1;
  cursor: pointer;
`;

const Profile: React.FC<ProfileProps> = ({ profileImage, mainIcon, secondaryIcon }) => {
  const [profileImageSrc, setProfileImageSrc] = useState(profileImage);

  // 파일 선택
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImageSrc(reader.result as string); // 선택된 이미지로 업데이트
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ProfileWrapper>
      <CircleWrapper>
        <InnerCircle hasProfileImage={!!profileImageSrc}>
          {profileImageSrc ? (
            <img src={profileImageSrc} alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover'}} />
          ) : (
            <Icon>
              <img src={mainIcon} alt="User" style={{ width: '100px', height: '100px' }} />
            </Icon>
          )}
        </InnerCircle>
      </CircleWrapper>
      
      <SmallCircle>
        <Icon>
          <img 
            src={secondaryIcon} 
            alt="add" 
            style={{ width: '24px', height: '24px' }} 
            onClick={() => document.getElementById('fileInput')?.click()} // 파일 선택 창 열기
          />
        </Icon>
      </SmallCircle>

      {/* hidden file input */}
      <input 
        type="file" 
        id="fileInput" 
        style={{ display: 'none' }} 
        accept="image/*" // 이미지 파일만 허용
        onChange={handleFileChange} 
      />
    </ProfileWrapper>
  );
};

export default Profile;
