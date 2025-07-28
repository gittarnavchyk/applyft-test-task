import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #e0e7ff;
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
`;

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <StyledInput {...props} />;
}

export default Input;
