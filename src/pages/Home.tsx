import React, { useState } from "react";
import { Input } from "../components/Input/Input";
import LiveSearch from "../components/LiveSearch/LiveSearch";
import { Container, Header } from "./styles";

const Home: React.FC = () => {
  const [numberOfUsers, setNumberOfUsers] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleNumberOfUsersChange = (value: string) => {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      setNumberOfUsers(parsedValue);
    }
  };

  return (
    <Container>
      <Header>Number of Users Input:</Header>
      <Input
        value={numberOfUsers.toString()}
        onChange={handleNumberOfUsersChange}
        placeholder="Enter the number of users"
      />
      <hr />
      <LiveSearch
        numberOfUsers={numberOfUsers}
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
      />
    </Container>
  );
};

export default Home;
