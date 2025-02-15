import React, { useState } from 'react';
import styled from '@emotion/styled';

interface ProfileProps {
  profileImage?: string;
  mainIcon: string;
}


const InnerCircle = styled.div<{ hasProfileImage: boolean }>`
  width: 5.5625rem;
  height: 5.5625rem;
  flex-shrink: 0;
  background-color: var(--gray-scale-30); 
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ hasProfileImage }) =>
    hasProfileImage && `background-color: var(--common-white);`}
`;

const Profile: React.FC<ProfileProps> = ({ profileImage, mainIcon }) => {
  const [profileImageSrc, setProfileImageSrc] = useState(profileImage);

  return (
    <InnerCircle hasProfileImage={!!profileImageSrc}>
      {profileImageSrc ? (
        <img src={profileImageSrc} alt="Profile" style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover' }} />
      ) : (
        <img src={mainIcon} alt="User" style={{ width: "36.776px", height: "36.776px" }} />
      )}
    </InnerCircle>
  );
};

export default Profile;
