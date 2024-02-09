import styled from 'styled-components';

export const UserCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px; 
  padding: 20px; 
`;

export const UserCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
  padding: 16px;
  border-radius: 8px; 

  img {
    width: 100px; 
    height: 100px; 
    border-radius: 50%; 
    object-fit: cover; 
  }

  .user-name {
    margin-top: 12px;
    text-align: center;
    font-weight: bold; 
  }
`;
