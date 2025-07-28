import { useState } from "react";
import styled from "styled-components";
import Input from "../../../components/Input";

const Wrapper = styled.div`
  margin-bottom: 2rem;
  max-width: calc(100% - 2rem);
`;

interface SearchUserProps {
  loading: boolean;
  onSearch: (query: string) => void;
}

function SearchUser({ loading, onSearch }: SearchUserProps) {
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
        disabled={loading}
        onChange={handleChange}
        autoComplete="off"
      />
    </Wrapper>
  );
}

export default SearchUser;
