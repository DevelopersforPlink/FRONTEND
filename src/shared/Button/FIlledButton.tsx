import styled from "@emotion/styled";
import * as Typography from "@/app/typography";

const buttonSizes = {
  xs: { width: "89px", height: "48px" },
  s: { width: "196px", height: "48px" },
  m: { width: "305px", height: "50px" },
  l: { width: "414px", height: "50px" },
};

const getButtonColors = (scale: "xs" | "s" | "m" | "l", state: string) => {
  if (state === "disabled") {
    return {
      backgroundColor: "var(--gray-scale-20)",
      color: "var(--gray-scale-60)",
    };
  }

  const isPressed = state === "pressed";
  const isHovered = state === "hover";

  let primaryColorValue = "var(--primary-color-60)";
  let textColor = "var(--common-white)";

  if (isPressed) {
    if (scale === "xs") {
      primaryColorValue = "var(--primary-color-60)"; 
      textColor = "var(--common-white)";
    } else {
      primaryColorValue = "var(--primary-color-10)"; 
      textColor = "var(--primary-color-60)"; 
    }
  } else if (isHovered) {
    primaryColorValue = "var(--primary-color-40)"; 
  } else if (state === "default") {
    if (scale === "xs") {
      primaryColorValue = "var(--primary-color-10)"; 
      textColor = "var(--primary-color-60)"; 
    } else {
      primaryColorValue = "var(--primary-color-60)"; 
    }
  }

  return {
    backgroundColor: primaryColorValue,
    color: textColor,
  };
};

interface FilledButtonProps {
  scale: "xs" | "s" | "m" | "l";
  state: "default" | "hover" | "pressed" | "disabled";
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const FilledButton = styled.button<FilledButtonProps>`
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Typography.Button1}
  text-align: center;
  transition: all 0.3s ease;

  width: ${({ scale }) => buttonSizes[scale].width};
  height: ${({ scale }) => buttonSizes[scale].height};

  ${({ scale, state }) => {
    const { backgroundColor, color } = getButtonColors(scale, state);
    return `
      background-color: ${backgroundColor};
      color: ${color};

      &:hover {
        background-color: var(--primary-color-40);
        color: var(--common-white);
      }

      &:active {
        background-color: var(--primary-color-10);
        color: ${scale === "xs" ? "var(--primary-color-60)" : "var(--primary-color-60)"};
      }

      &:disabled {
        background-color: var(--gray-scale-20);
        color: var(--gray-scale-60);
        cursor: not-allowed;
      }
    `;
  }}

  ${({ scale }) => {
    return scale === "xs" || scale === "s" ? Typography.Button2 : Typography.Button1;
  }}
`;

const FilledButtonComponent: React.FC<FilledButtonProps> = ({ children, onClick, ...props }) => {
  return (
    <FilledButton {...props} onClick={onClick}>
      {children}
    </FilledButton>
  );
};

export default FilledButton;
