import styled from "styled-components";
import { ButtonVariants, ButtonSizes } from "./types";

interface StyledButtonProps {
  variant: ButtonVariants;
  size?: ButtonSizes;
  isloading?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: ${({ size }) => (size === 'small' ? '0.25rem 0.5rem' : size === 'large' ? '0.75rem 1.5rem' : '0.5rem 1rem')};
  font-size: ${({ size }) => (size === 'small' ? '0.875rem' : size === 'large' ? '1.25rem' : '1rem')};
  border-radius: 4px;
  border: none;
  cursor: ${({ isloading }) => (isloading ? 'wait' : 'pointer')};
  transition: background-color 0.3s ease;
  margin-right: 8px;
  

  &:last-child {
    margin-right: 0;
  }

  background-color: ${({ variant }) => {
    switch (variant) {
      case 'primary': return '#007bff';
      case 'secondary': return '#6c757d';
      default: return '#f8f9fa';
    }
  }};

  color: ${({ variant }) => (variant === 'primary' || variant === 'secondary' ? 'white' : 'black')};
  

  &:hover:not(:disabled) {
    background-color: ${({ variant }) => {
      switch (variant) {
        case 'primary': return '#0056b3';
        case 'secondary': return '#545b62';
        default: return '#e2e6ea';
      }
    }};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`
