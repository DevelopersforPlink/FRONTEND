import styled from "@emotion/styled";
import * as Typography from "@/app/typography";

const buttonSizes = {
  xs: { width: "134px", height: "48px" },
  s: { width: "154px", height: "48px" },
  m: { width: "305px", height: "96px" },
  l: { width: "414px", height: "48px" },
};

const getButtonBorder = (state: string) => {
  if (state === "disabled") {
    return {
      borderColor: "var(--gray-scale-20)",
      color: "var(--gray-scale-60)",
    };
  }

  const isPressed = state === "pressed";
  const isHovered = state === "hover";

  let borderColor = "var(--gray-scale-20)";
  if (isPressed) {
    borderColor = "var(--primary-color-60)";
  } else if (isHovered) {
    borderColor = "var(--primary-color-40)";
  }

  return {
    borderColor: borderColor,
  };
};

interface OutlinedButtonProps {
  scale: "xs" | "s" | "m" | "l";
  state: "default" | "hover" | "pressed" | "disabled";
  children: React.ReactNode;
  iconSrc?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>; 
}

const OutlinedButton = styled.button<OutlinedButtonProps>`
  border: 1px solid;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: Pretendard, sans-serif;
  line-height: normal;
  text-align: center;
  background-color: white;

  width: ${({ scale }) => buttonSizes[scale].width};
  height: ${({ scale }) => buttonSizes[scale].height};

  padding: 0 16px;
  gap: 12px;

  ${({ scale }) => {
    if (scale === "m") {
      return `
        padding: 0 40px;
        gap: 24px;
      `;
    }
  }}

  ${({ state }) => {
    const { borderColor } = getButtonBorder(state);
    return `
      border-color: ${borderColor};

      &:hover {
        border-color: var(--primary-color-40);
      }

      &:active {
        border-color: var(--primary-color-60);
      }

      &:disabled {
        border-color: var(--gray-scale-20);
        cursor: not-allowed;
        color: var(--gray-scale-40); /* Disabled 상태에서 텍스트 색상을 gray-scale-40으로 설정 */
      }
    `;
  }}

  ${({ scale }) => {
    if (scale === "xs") return Typography.Button2;
    if (scale === "s") return Typography.Button1;
    if (scale === "m") return Typography.Button3;
    return Typography.Button2; // 디폴트: l
  }}

  svg {
    margin-right: ${({ scale }) => (scale === "xs" ? "4px" : "8px")};
    width: ${({ scale }) => (scale === "xs" ? "16px" : scale === "s" ? "24px" : scale === "m" ? "32px" : "24px")};
    height: ${({ scale }) => (scale === "xs" ? "16px" : scale === "s" ? "24px" : scale === "m" ? "32px" : "24px")};

    ${({ state }) =>
      state === "disabled" && `
        color: var(--gray-scale-40); /* Disabled 상태에서 아이콘 색상을 gray-scale-40으로 설정 */
      `}
  }

  img {
    margin-right: ${({ scale }) => (scale === "xs" ? "4px" : "8px")};
    width: ${({ scale }) => (scale === "xs" ? "16px" : scale === "s" ? "24px" : scale === "m" ? "32px" : "24px")};
    height: ${({ scale }) => (scale === "xs" ? "16px" : scale === "s" ? "24px" : scale === "m" ? "32px" : "24px")};

    ${({ state }) =>
      state === "disabled" && `
        filter: grayscale(100%); /* Disabled 상태에서 이미지를 회색으로 변환 */
      `}
  }
`;

const OutlinedButtonComponent: React.FC<OutlinedButtonProps> = ({ iconSrc, onClick, children, ...props }) => {
  return (
    <OutlinedButton {...props} onClick={onClick}>
      {iconSrc && <img src={iconSrc} alt="icon" />}
      {children}
    </OutlinedButton>
  );
};

export default OutlinedButtonComponent;
