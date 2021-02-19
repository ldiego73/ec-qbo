import styled from "styled-components";
import { Link } from "react-router-dom";

import { CardProduct } from "../../../components/card/products";
import { Title } from "../../../components/title";
import { TEXT_COLOR_SECONDARY } from "../../../components/variables";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 112px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const LinkWrapper = styled(Link)`
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: ${TEXT_COLOR_SECONDARY};
  cursor: pointer;
  text-decoration: none;
`;

const Products = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Ofertas = ({ title, products }) => (
  <Wrapper>
    <Header>
      <Title value={title} flex={true} />
      <LinkWrapper to="/products">Ver catálogo completo</LinkWrapper>
    </Header>
    <Products>
      {products.map((p, i) => (
        <CardProduct key={`oferta-product-${i}`} product={p} width={380} />
      ))}
    </Products>
  </Wrapper>
);
