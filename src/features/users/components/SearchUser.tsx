import { useState } from "react";
import styled from "styled-components";
import Input from "../../../components/Input";

const Wrapper = styled.div`
  margin-bottom: 2rem;
  max-width: calc(100% - 2rem);
`;

interface SearchUserProps {
  onSearch: (query: string) => void;
}

function SearchUser({ onSearch }: SearchUserProps) {
  const [query, setQuery] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={handleChange}
        autoComplete="off"
      />
    </Wrapper>
  );
}

export default SearchUser;
