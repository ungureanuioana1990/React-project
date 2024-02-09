import React from "react";
import { InputContainer, StyledInput, ErrorMessage } from "./styles"; 

interface Props {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  errorMessage?: string; 
}

export const Input: React.FC<Props> = ({ value, onChange, placeholder, errorMessage = "Please enter a valid positive number" }) => {
  const [error, setError] = React.useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    // Validation for positive integers
    if (newValue !== "" && (!/^\d+$/.test(newValue) || parseInt(newValue, 10) <= 0)) {
      setError(errorMessage);
    } else {
      setError(""); // Clear error message when input is valid
      onChange(newValue);
    }
  };

  return (
    <InputContainer>
      <StyledInput
        type="number"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputContainer>
  );
};
