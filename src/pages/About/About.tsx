import { StyledAbout, Title, Paragraph } from "./styles";

function About() {
  return (
    <StyledAbout>
      <Title>About</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
        urna eu tincidunt consectetur, nisi nisl aliquam enim, nec dictum urna
        erat nec erat. Pellentesque habitant morbi tristique senectus et netus
        et malesuada fames ac turpis egestas.
      </Paragraph>
      <Paragraph>
        Suspendisse potenti. Etiam euismod, justo eu facilisis cursus, sapien
        erat cursus enim, eu tincidunt urna erat nec erat. Mauris non tempor
        quam, et lacinia sapien. Mauris accumsan eros eget libero posuere
        vulputate.
      </Paragraph>
      <Paragraph>
        Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec
        felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci
        lectus, consectetur vel posuere posuere, rutrum eu ipsum.
      </Paragraph>
    </StyledAbout>
  );
}

export default About;
