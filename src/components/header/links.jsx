import styled from "styled-components";
import { TEXT_COLOR_INVERSE } from "../variables";

const Wrapper = styled.div`
  margin-left: 40px;
`;

const LinkWrapper = styled.a`
  flex: 1;
  color: ${TEXT_COLOR_INVERSE};
  text-decoration: none;

  font-size: 16px;
  line-height: 14px;
  padding: 16px 40px;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
`;

export const HeaderLinks = ({ links }) => (
  <Wrapper>
    {links.map((link, i) => (
      <LinkWrapper key={`header-link-${i}`} href={link.to}>
        {link.title}
      </LinkWrapper>
    ))}
  </Wrapper>
);
