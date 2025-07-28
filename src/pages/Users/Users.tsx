import styled from "styled-components";

const StyledUsers = styled.div`
  padding: 2rem;
`;

function Users() {
  return (
    <StyledUsers>
      <h2>Users</h2>
      <p>This is a test SPA built with React.</p>
    </StyledUsers>
  );
}

export default Users;
