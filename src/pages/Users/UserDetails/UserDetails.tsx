import styled from "styled-components";

const StyledUserDetails = styled.div`
  padding: 2rem;
`;

function UserDetails() {
  return (
    <StyledUserDetails>
      <h2>About</h2>
      <p>This is a test SPA built with React.</p>
    </StyledUserDetails>
  );
}

export default UserDetails;
