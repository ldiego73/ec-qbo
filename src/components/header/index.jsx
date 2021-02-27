import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container } from "../container";
import { Content } from "../content";
import { COLOR_PRIMARY, HEADER_HEIGHT, TEXT_COLOR_INVERSE } from "../variables";
import { HeaderActions } from "./actions";
import { HeaderLinks } from "./links";

const Wrapper = styled.header`
  background: ${COLOR_PRIMARY};
  height: ${HEADER_HEIGHT}px;

  color: ${TEXT_COLOR_INVERSE};
`;

const Title = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  color: ${TEXT_COLOR_INVERSE};

  &:hover,
  &:focus,
  &:active {
    color: ${TEXT_COLOR_INVERSE};
  }
`;

const links = [
  { title: "Nuestra historia", to: "/history" },
  { title: "Nuestros productos", to: "/products" },
];

export const Header = () => (
  <Wrapper>
    <Container height={HEADER_HEIGHT}>
      <Content align="center">
        <Title to="/">EC QBO</Title>
        <HeaderLinks links={links} />
        <HeaderActions />
      </Content>
    </Container>
  </Wrapper>
);
