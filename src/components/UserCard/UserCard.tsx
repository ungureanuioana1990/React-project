import React from 'react';
import { UserCardWrapper } from './styles';

interface UserCardProps {
  image: string;
  firstName: string;
  lastName: string;
}

const UserCard: React.FC<UserCardProps> = ({ image, firstName, lastName }) => {
  return (
    <UserCardWrapper>
      <img src={image} alt="User" />
      <div className="user-name">
        <span>{firstName} {lastName}</span>
      </div>
    </UserCardWrapper>
  );
};

export default UserCard;

