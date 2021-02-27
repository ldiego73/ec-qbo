import { Button } from "@components/button";
import { Title } from "@components/title";
import { COLOR_WHITE, TEXT_COLOR_PRIMARY } from "@components/variables";
import { EcommerceContext } from "@contexts/ecommerce.context";
import { Layout } from "@layouts/main";
import { formatCurrency } from "@utils/intl.util";
import { useContext, useState } from "react";
import CounterInput from "react-counter-input";
import styled from "styled-components";

const Wrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 134px;
`;

const CartContainer = styled.div`
  display: flex;
`;

const CardContent = styled.div`
  background: ${COLOR_WHITE};
  border-radius: 20px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  padding: 40px;
  box-sizing: border-box;
`;

const CartProducts = styled(CardContent)`
  width: 100%;
  margin-right: 40px;
`;

const ProductsList = styled.div``;

const CartSubTitle = styled.div`
  font-size: 20px;
  line-height: 20px;
  width: 100%;
  margin-bottom: 8px;
`;

const CartTitle = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 24px;
  line-height: 40px;
  color: ${TEXT_COLOR_PRIMARY};
`;

const CartSeparator = styled.div`
  border: 1px solid #91979e;
  margin: 24px 0;
`;

const CartItem = styled.div`
  margin-top: 28px;
  display: flex;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

const CartItemImage = styled.img`
  display: flex;
  border-radius: 8px;
  width: 92px;
  height: 65px;
  object-fit: cover;
  margin-bottom: 28px;
  margin-right: 16px;
`;

const CartItemInfo = styled.div`
  width: 100%;
`;

const CardItemName = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: ${TEXT_COLOR_PRIMARY};
  margin-bottom: 8px;
`;

const CardItemCounter = {
  border: "1px solid #E5E7E8",
  borderRadius: "32px",
  width: "108px",
};

const CartItemOptions = styled.div`
  width: auto;
`;

const CartItemPrice = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  text-align: right;
  color: ${TEXT_COLOR_PRIMARY};
  margin-bottom: 20px;
`;

const CartResumen = styled(CardContent)`
  width: 480px;
  box-sizing: content-box;
`;

const CartResumenHeader = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items: center;
`;

const CartSubTotal = styled.div`
  font-size: 20px;
  line-height: 20px;
  color: ${TEXT_COLOR_PRIMARY};
`;

const CartModalidad = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 40px;
`;

const CartModalidadItem = styled.div`
  display: flex;
  border: 1px solid ${({ selected }) => (selected ? "#FF9F5F" : "#e5e7e8")};
  background: ${({ selected }) => (selected ? "#FFDEBA" : "#fff")};
  box-sizing: border-box;
  border-radius: 16px;
  padding: 16px;
  margin-top: 24px;
  cursor: pointer;
`;

export function CartPage() {
  const [modalidad, setModalidad] = useState(0);

  const { cart, removeProductToCart, updateProductQuantityToCart } = useContext(
    EcommerceContext
  );

  const getSubTotal = () => cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const getModalidad = () => {
    if (modalidad === 1) return 10;

    return 0;
  };

  const getTotal = () => getSubTotal() + getModalidad();

  function handleDeleteProduct(productId) {
    removeProductToCart(productId);
  }

  function handleUpdateProductQuantity(productId, quantity) {
    updateProductQuantityToCart(productId, quantity);
  }

  function handleModalidadClick(value) {
    setModalidad(value);
  }

  return (
    <Layout>
      <Wrapper>
        <Title value="Tu Orden" />
        <CartContainer>
          <CartProducts>
            <CartSubTitle>Dirección de envío</CartSubTitle>
            <CartTitle>Av. La Marina 220, San Miguel, Lima</CartTitle>
            <CartSeparator />
            <CartSubTitle>Productos</CartSubTitle>
            <ProductsList>
              {cart && cart.length > 0 ? (
                cart.map((product, index) => (
                  <CartItem key={`cart-item-${index}`}>
                    <CartItemImage src={product.image} loading="lazy" />
                    <CartItemInfo>
                      <CardItemName>{product.name}</CardItemName>
                      <CounterInput
                        min={1}
                        max={10}
                        count={product.quantity}
                        onCountChange={(value) =>
                          handleUpdateProductQuantity(product.id, value)
                        }
                        wrapperStyle={CardItemCounter}
                      />
                    </CartItemInfo>
                    <CartItemOptions>
                      <CartItemPrice>
                        {formatCurrency(product.price * product.quantity)}
                      </CartItemPrice>
                      <Button
                        type="primary"
                        value="Eliminar"
                        onButtonClicked={() => handleDeleteProduct(product.id)}
                      />
                    </CartItemOptions>
                  </CartItem>
                ))
              ) : (
                <div>No se encontraron productos</div>
              )}
            </ProductsList>
          </CartProducts>
          <CartResumen>
            <CartResumenHeader>
              <CartSubTitle>Total por Productos</CartSubTitle>
              <CartSubTotal>{formatCurrency(getSubTotal())}</CartSubTotal>
            </CartResumenHeader>
            <CartSubTitle>Modalidad de Entrega</CartSubTitle>
            <CartModalidad>
              <CartModalidadItem
                selected={modalidad === 1}
                onClick={() => handleModalidadClick(1)}
              >
                Delivery
              </CartModalidadItem>
              <CartModalidadItem
                selected={modalidad === 2}
                onClick={() => handleModalidadClick(2)}
              >
                Recojo en Tienda
              </CartModalidadItem>
            </CartModalidad>
            <CartSeparator />
            <CartResumenHeader>
              <CartSubTitle>Delivery</CartSubTitle>
              <CartSubTotal>{formatCurrency(getModalidad())}</CartSubTotal>
            </CartResumenHeader>
            <CartResumenHeader>
              <CartTitle>Total a Pagar</CartTitle>
              <CartSubTotal>{formatCurrency(getTotal())}</CartSubTotal>
            </CartResumenHeader>
          </CartResumen>
        </CartContainer>
      </Wrapper>
    </Layout>
  );
}
