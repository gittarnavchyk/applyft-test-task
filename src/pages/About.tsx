import styled from "styled-components";

const StyledAbout = styled.div`
  padding: 2.5rem;
  max-width: 1200px;
  margin: 2.5rem auto;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 8px 32px rgba(60, 60, 120, 0.1);

  h2 {
    font-size: 2rem;
    font-weight: 700;
    color: #2d2d6a;
    margin-bottom: 1.5rem;
    letter-spacing: 1px;
  }

  p {
    font-size: 1.15rem;
    color: #444;
    margin-bottom: 1.2rem;
    line-height: 1.7;
  }
`;

function About() {
  return (
    <StyledAbout>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        urna eu tincidunt consectetur, nisi nisl aliquam enim, nec dictum urna
        erat nec erat. Pellentesque habitant morbi tristique senectus et netus
        et malesuada fames ac turpis egestas.
      </p>
      <p>
        Suspendisse potenti. Etiam euismod, justo eu facilisis cursus, sapien
        erat cursus enim, eu tincidunt urna erat nec erat. Mauris non tempor
        quam, et lacinia sapien. Mauris accumsan eros eget libero posuere
        vulputate.
      </p>
      <p>
        Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec
        felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci
        lectus, consectetur vel posuere posuere, rutrum eu ipsum.
      </p>
    </StyledAbout>
  );
}

export default About;
