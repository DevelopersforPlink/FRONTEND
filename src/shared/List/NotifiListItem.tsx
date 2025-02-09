import styled from "@emotion/styled";
import * as Typography from "@/app/typography";

const itemSizes = {
  width: "370px",
  height: "66px",
};

const getItemColors = (status: "default" | "new", state: "default" | "hover" | "pressed") => {
  let backgroundColor = "var(--common-white)";
  let textColor = "var(--gray-scale-100)";

  if (status === "default") {
    if (state === "hover") {
      backgroundColor = "var(--gray-scale-10)";
    } else if (state === "pressed") {
      backgroundColor = "var(--gray-scale-20)";
    }
  } else if (status === "new") {
    if (state === "default") {
      backgroundColor = "var(--primary-color-10)";
    } else if (state === "hover") {
      backgroundColor = "var(--primary-color-20)";
    } else if (state === "pressed") {
      backgroundColor = "var(--primary-color-30)";
    }
  }

  return {
    backgroundColor,
    textColor,
  };
};

interface NotifiListItemProps {
  state: "default" | "hover" | "pressed";
  status: "default" | "new";
  profileImage: string;
  summitName: string;
  rejectionReason: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const NotifiListItemWrapper = styled.div<NotifiListItemProps>`
  width: ${itemSizes.width};
  height: ${itemSizes.height};
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  border-radius: 8px;
  transition: all 0.3s ease;
  ${({ state, status }) => {
    const { backgroundColor, textColor } = getItemColors(status, state);
    return `
      background-color: ${backgroundColor};
      color: ${textColor};
      
      &:hover {
        background-color: ${status === "new" ? "var(--primary-color-20)" : "var(--gray-scale-10)"};
      }

      &:active {
        background-color: ${status === "new" ? "var(--primary-color-30)" : "var(--gray-scale-20)"};
      }
    `;
  }}
`;

const ProfileImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--gray-scale-20);
  margin-right: 12px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 62px);  // 370px - 50px - 12px
  gap: 8px;
`;

const BottomTextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const RejectionReason = styled.div`
  ${Typography.Caption6}
  color: var(--gray-scale-90);
`;

const NotifiListItem: React.FC<NotifiListItemProps> = ({
  state,
  status,
  profileImage,
  summitName,
  rejectionReason,
  onClick,
}) => {
  return (
    <NotifiListItemWrapper state={state} status={status} onClick={onClick} profileImage={""} summitName={""} rejectionReason={""}>
      <ProfileImage>
        <img src={profileImage} alt="Profile" />
      </ProfileImage>
      <ContentWrapper>
        <Typography.Title7>알림 내용</Typography.Title7>
        <BottomTextWrapper>
          <Typography.Caption2>{summitName}</Typography.Caption2>
          <Typography.Caption6>· 반려 사유 - {rejectionReason} 기준 위반</Typography.Caption6>
        </BottomTextWrapper>
      </ContentWrapper>
    </NotifiListItemWrapper>
  );
};

export default NotifiListItem;
