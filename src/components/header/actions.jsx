import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as User } from "./icons/user.svg";
import { ReactComponent as Store } from "./icons/store.svg";
import { COLOR_WHITE, TEXT_COLOR_INVERSE } from "../variables";

const margin = 32;

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
  line-height: 14px;
  text-align: right;

  a {
    text-decoration: none;
    color: ${TEXT_COLOR_INVERSE};

    &:focus,
    &:hover,
    &:active {
      color: ${TEXT_COLOR_INVERSE};
    }
  }
`;

const ActionStore = styled(Link)`
  display: inline-block;
  cursor: pointer;
  margin-right: ${margin}px;

  svg {
    vertical-align: sub;
  }
`;

const ActionLogin = styled(Link)`
  display: inline-block;
  cursor: pointer;
  margin-left: ${margin}px;

  svg {
    vertical-align: sub;
  }
`;

const Separator = styled.span`
  display: inline-flex;
  width: 2px;
  background: ${COLOR_WHITE};
  height: 28px;
`;

export const HeaderActions = () => (
  <Wrapper>
    <ActionStore to="/cart">
      <Store /> S/ 0.00
    </ActionStore>
    <Separator />
    <ActionLogin to="/oauth/login">
      <User /> Iniciar Sesión
    </ActionLogin>
  </Wrapper>
);
