import styled from "styled-components";

const StyledNotFound = styled.div`
  padding: 2rem;
  text-align: center;
`;

function NotFoundPage() {
  return (
    <StyledNotFound>
      <h2>404 - Page Not Found</h2>
      <p>The page you are looking for does not exist.</p>
    </StyledNotFound>
  );
}

export default NotFoundPage;
