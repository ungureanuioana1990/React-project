import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserCard from '../UserCard/UserCard';
import Slideshow from '../SlideShow/SlideShow';
import { AppDispatch, RootState } from '../../store/store';
import { fetchUsers, selectFilteredUsers } from '../../store/userSlice';
import { Container, Divider, ErrorMessage, SearchInput } from './styles';


interface LiveSearchProps {
  numberOfUsers: number;
  searchQuery: string;
  onSearch: (query: string) => void;
}

const LiveSearch: React.FC<LiveSearchProps> = ({ numberOfUsers, searchQuery, onSearch }) => {
  const dispatch = useDispatch<AppDispatch>(); 
  const users = useSelector((state: RootState) => state.users.users);
  const filteredUsers = useSelector((state: RootState) => selectFilteredUsers(state, searchQuery));
  const error = useSelector((state: RootState) => state.users.error);

  useEffect(() => {
    if (numberOfUsers > 0 && Number.isInteger(numberOfUsers)) {
      dispatch(fetchUsers(numberOfUsers));
    } else {
      console.error('Invalid number of users');
    }
  }, [numberOfUsers, dispatch]);

  return (
    <Container>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <SearchInput
        type="text"
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search for users..."
      />
      <Slideshow users={users} />
      <Divider />
      {filteredUsers.map((user, index) => (
        <UserCard
          key={index}
          image={user.picture.large}
          firstName={user.name.first}
          lastName={user.name.last}
        />
      ))}
    </Container>
  );
};

export default LiveSearch;
