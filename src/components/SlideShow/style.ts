import styled from 'styled-components';

export const SlideshowContainer = styled.div`
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const UsersDisplayContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
transition: transform 0.5s ease-in-out;
&:hover {
  transform: scale(1.05);
`;
export const StyledInput = styled.input`
  margin: 5px;
`;