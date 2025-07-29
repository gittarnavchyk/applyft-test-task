import styled from "styled-components";

export const StyledInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 2px solid #6b7280;
  border-radius: 0.5rem;
  background: #f6f7fb;
  font-size: 1rem;
  color: #2d2d6a;
  transition: border-color 0.2s, box-shadow 0.2s;
  margin: 20px 0;

  &:focus {
    outline: none;
    border-color: #4f46e5;
    box-shadow: 0 2px 8px rgba(60, 60, 120, 0.08);
    background: #fff;
  }

  &:focus-visible {
    outline: 3px solid #fbbf24;
    outline-offset: 2px;
  }
`;
