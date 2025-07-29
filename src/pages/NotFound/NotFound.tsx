import { StyledNotFound, Title, Message, NavLinks, StyledLink } from "./styles";

function NotFoundPage() {
  return (
    <StyledNotFound>
      <Title>404 - Page Not Found</Title>
      <Message>The page you are looking for does not exist.</Message>
      <NavLinks>
        <StyledLink to="/about" aria-label="Navigate to About page">
          Go to About
        </StyledLink>
        <StyledLink to="/users" aria-label="Navigate to Users page">
          Go to Users
        </StyledLink>
      </NavLinks>
    </StyledNotFound>
  );
}

export default NotFoundPage;
