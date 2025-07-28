import styled from "styled-components";

const StyledAbout = styled.div`
  padding: 2rem;
`;

function About() {
  return (
    <StyledAbout>
      <h2>About</h2>
      <p>This is a test SPA built with React.</p>
    </StyledAbout>
  );
}

export default About;
