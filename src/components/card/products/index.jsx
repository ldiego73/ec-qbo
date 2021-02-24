import styled from "styled-components";

import { Button } from "../../button";
import { TEXT_COLOR_GRAY, TEXT_COLOR_PRIMARY } from "../../variables";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => `${width}px`};
`;

const Image = styled.img`
  border-radius: 8px;
  margin-bottom: 16px;
  object-fit: cover;
  cursor: pointer;
`;

const Header = styled.div`
  display: flex;
  margin-bottom: 4px;
`;

const SubTitle = styled.div`
  flex: 1;
  font-size: 14px;
  line-height: 16px;
  color: ${TEXT_COLOR_GRAY};
`;

const PriceOld = styled.div`
  font-size: 14px;
  line-height: 16px;
  text-decoration-line: line-through;
  color: ${TEXT_COLOR_GRAY};
`;

const Body = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const Title = styled.div`
  flex: 1;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: ${TEXT_COLOR_PRIMARY};
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: ${TEXT_COLOR_PRIMARY};
`;

const Footer = styled.div`
  display: flex;
`;

export function CardProduct({ product, width, onClicked, onAddProduct }) {
  function handleClick(p) {
    if (typeof onClicked === "function") {
      onClicked(p);
    }
  }

  function handleAddProduct(p) {
    if (typeof onAddProduct === "function") {
      onAddProduct(p);
    }
  }

  return (
    <Wrapper width={width}>
      <Image
        src={product.image}
        loading="lazy"
        onClick={() => handleClick(product)}
      />
      <Header>
        <SubTitle>{product.group}</SubTitle>
        <PriceOld>S/. {product.priceOld}</PriceOld>
      </Header>
      <Body>
        <Title>{product.name}</Title>
        <Price>S/. {product.price}</Price>
      </Body>
      <Footer>
        <Button
          type="primary"
          value="Agregar"
          onButtonClicked={() => handleAddProduct(product)}
        />
      </Footer>
    </Wrapper>
  );
}
