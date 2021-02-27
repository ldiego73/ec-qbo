import { EcommerceContext } from "@contexts/ecommerce.context";
import { formatCurrency } from "@utils/intl.util";
import { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { COLOR_WHITE, TEXT_COLOR_INVERSE } from "../variables";
import { ReactComponent as Store } from "./icons/store.svg";
import { ReactComponent as User } from "./icons/user.svg";

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

export function HeaderActions() {
  const { cart } = useContext(EcommerceContext);

  const getTotal = () => {
    const neto = cart.reduce((total, product) => total + product.price*product.quantity, 0);

    return formatCurrency(neto);
  }

  return (
    <Wrapper>
      <ActionStore to="/cart">
        <Store /> {getTotal()}
      </ActionStore>
      <Separator />
      <ActionLogin to="/oauth/login">
        <User /> Iniciar Sesión
      </ActionLogin>
    </Wrapper>
  );
}
