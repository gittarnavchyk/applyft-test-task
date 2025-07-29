import { useState } from "react";
import { Wrapper } from "./styles";
import Input from "../../../../components/Input";

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
