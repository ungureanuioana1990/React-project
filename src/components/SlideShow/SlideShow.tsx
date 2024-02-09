import React, { useState, useEffect, useCallback } from 'react';
import UserCard from '../UserCard/UserCard';
import { User } from '../../pages/types';
import { Button } from '../Button/Button';
import { SlideshowContainer, ButtonContainer, UsersDisplayContainer } from './style';

interface SlideshowProps {
  users: User[];
}

const Slideshow: React.FC<SlideshowProps> = ({ users }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);

  const goToNextUser = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % users.length);
  }, [users.length]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isRunning && users.length > 0) {
      interval = setInterval(goToNextUser, 2000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isRunning, users.length, goToNextUser]);

  return (
    <SlideshowContainer>
      <ButtonContainer>
        <Button arlabel="Start slideshow" onClick={() => setIsRunning(true)} disabled={isRunning} variant="primary">
          Start
        </Button>
        <Button arlabel="Stop slideshow" onClick={() => setIsRunning(false)} disabled={!isRunning} variant="secondary">
          Stop
        </Button>
      </ButtonContainer>
      {users.length > 0 ? (
        <UsersDisplayContainer>
          <UserCard
            key={users[currentIndex].id}
            image={users[currentIndex].picture.medium}
            firstName={users[currentIndex].name.first}
            lastName={users[currentIndex].name.last}
          />
        </UsersDisplayContainer>
      ) : (
        <p>No users to display.</p>
      )}
    </SlideshowContainer>
  );
};

export default Slideshow;
