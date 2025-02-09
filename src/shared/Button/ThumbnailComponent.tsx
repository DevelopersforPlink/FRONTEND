import styled from "@emotion/styled";
import * as Typography from "@/app/typography";

const buttonSizes = {
  width: "414px",
  height: "229px",
};

const getButtonColors = (state: string) => {
  const isPressed = state === "pressed";
  const isHovered = state === "hover";

  let textColor = "var(--gray-scale-60)"; 
  let borderColor = "var(--gray-scale-40)"; 

  if (isPressed || isHovered) {
    textColor = "var(--gray-scale-100)"; 
  }

  if (isPressed) {
    borderColor = "var(--primary-color-60)"; 
  } else if (isHovered) {
    borderColor = "var(--primary-color-40)"; 
  }

  return {
    backgroundColor: "var(--common-white)", 
    textColor,
    borderColor,
  };
};

interface ThumbnailProps {
  state: "default" | "hover" | "pressed" | "disabled";
  iconSrc: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ThumbnailButton = styled.button<ThumbnailProps>`
  border: 1px solid;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease;

  width: ${buttonSizes.width};
  height: ${buttonSizes.height};

  ${({ state }) => {
    const { backgroundColor, textColor, borderColor } = getButtonColors(state);
    return `
      background-color: ${backgroundColor};
      color: ${textColor};
      border-color: ${borderColor};

      &:hover {
        border-color: var(--primary-color-40);
      }

      &:active {
        border-color: var(--primary-color-60);
      }

      &:disabled {
        background-color: var(--gray-scale-20);
        color: var(--gray-scale-60);
        cursor: not-allowed;
      }
    `;
  }}

  ${Typography.Button2} 

  svg {
    width: 32px;
    height: 32px; 
    color: inherit;
  }
`;

const ThumbnailComponent: React.FC<ThumbnailProps> = ({ iconSrc, onClick, ...props }) => {
  return (
    <ThumbnailButton iconSrc={""} {...props} onClick={onClick}>
      <img src={iconSrc} alt="icon" />
    </ThumbnailButton>
  );
};

export default ThumbnailComponent;