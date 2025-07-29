import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNotFound = styled.div`
  padding: 2rem;
  text-align: center;
  max-width: 600px;
  margin: 2.5rem auto;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const StyledLink = styled(Link)`
  padding: 0.4rem 1rem;
  background: #4f46e5;
  color: white;
  font-weight: 500;
  font-size: 0.9rem;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: background 0.2s;

  &:hover {
    background: #3730a3;
  }
`;

function NotFoundPage() {
  return (
    <StyledNotFound>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
      <NavLinks>
        <StyledLink to="/about">Go to About</StyledLink>
        <StyledLink to="/users">Go to Users</StyledLink>
      </NavLinks>
    </StyledNotFound>
  );
}

export default NotFoundPage;
