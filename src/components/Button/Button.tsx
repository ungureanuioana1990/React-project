import React, { FC, ButtonHTMLAttributes } from "react";
import { ButtonSizes, ButtonVariants } from "./types";
import { StyledButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  arlabel: string;
  variant: ButtonVariants;
  size?: ButtonSizes;
  isloading?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, variant, size = 'medium', isloading = false, ...props }) => {

  return (
    <StyledButton variant={variant} size={size} disabled={isloading} {...props}>
      {isloading ? 'Loading...' : children}
    </StyledButton>
  );
};

