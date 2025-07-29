import { useState, useRef } from "react";
import { Wrapper } from "./styles";
import Input from "../../../../components/Input/Input";

interface SearchUserProps {
  onSearch: (query: string) => void;
}

function SearchUser({ onSearch }: SearchUserProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Clear search on Escape
    if (e.key === "Escape") {
      setQuery("");
      onSearch("");
      inputRef.current?.blur();
    }
  };

  return (
    <Wrapper>
      <Input
        ref={inputRef}
        type="text"
        placeholder="Search users... (Press Escape to clear)"
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        aria-label="Search users by name, username, or email"
      />
    </Wrapper>
  );
}

export default SearchUser;
