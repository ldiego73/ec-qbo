import styled from "styled-components";
import { Link } from "react-router-dom";
import { Container } from "../container";
import {
  COLOR_GRAY,
  COLOR_SECONDARY,
  FOOTER_HEIGHT,
  PADDING,
  TEXT_COLOR_GRAY,
  TEXT_COLOR_INVERSE,
} from "../variables";

import { ReactComponent as Facebook } from "./icons/fb.svg";
import { ReactComponent as Instagram } from "./icons/ig.svg";

import { Content } from "../content";

const Wrapper = styled.footer`
  padding: 0 ${PADDING.DEFAULT}px;
  background: ${COLOR_SECONDARY};
  height: ${FOOTER_HEIGHT}px;
  color: ${TEXT_COLOR_INVERSE};
`;

const Info = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  color: ${TEXT_COLOR_INVERSE};
  text-decoration: none;

  &:focus,
  &:active,
  &:hover {
    color: ${TEXT_COLOR_INVERSE};
  }
`;

const Social = styled.div`
  flex: 1;
  text-align: right;
`;

const Icons = styled.div`
  display: inline-block;
  margin-left: 24px;

  svg {
    cursor: pointer;
    margin-right: 16px;
    vertical-align: bottom;

    &:last-child {
      margin-right: 0;
    }
  }
`;

const Copyright = styled.div`
  color: ${TEXT_COLOR_GRAY};
  font-size: 14px;
  line-height: 16px;
`;

const Separator = styled.div`
  margin-top: 20px;
  margin-bottom: 16px;
  border-top: 1px solid ${COLOR_GRAY};
`;

const year = new Date().getFullYear();

export const Footer = () => (
  <Wrapper>
    <Container height={FOOTER_HEIGHT}>
      <Content direction="column" justiy="center">
        <Info>
          <Title to="/">EC QBO</Title>
          <Social>
            SÍGUENOS EN
            <Icons>
              <Facebook />
              <Instagram />
            </Icons>
          </Social>
        </Info>
        <Separator />
        <Copyright>
          © {year} Todos los derechos reservados
        </Copyright>
      </Content>
    </Container>
  </Wrapper>
);
