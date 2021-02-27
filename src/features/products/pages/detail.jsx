import { Button } from "@components/button";
import {
  TEXT_COLOR_GRAY,
  TEXT_COLOR_PRIMARY,
  TEXT_COLOR_SECONDARY,
} from "@components/variables";
import { EcommerceContext } from "@contexts/ecommerce.context";
import { Layout } from "@layouts/main";
import { useContext } from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 80px;
`;

const Back = styled(Link)`
  margin-bottom: 36px;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: ${TEXT_COLOR_SECONDARY};
  text-decoration: none;
`;

const Product = styled.div`
  display: flex;
`;

const ProductImage = styled.div`
  width: 480px;
  height: 480px;
  object-fit: cover;
  border-radius: 16px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 16px;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
  width: 100%;
  margin-left: 80px;
`;

const ProductCategory = styled.div`
  font-size: 16px;
  line-height: 16px;
  color: ${TEXT_COLOR_GRAY};
  margin-bottom: 8px;
`;

const ProductName = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  color: ${TEXT_COLOR_PRIMARY};
  margin-bottom: 64px;
`;

const ProductActions = styled.div`
  width: 120px;
  margin-bottom: 48px;
`;

const ProductDescription = styled.div`
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  color: ${TEXT_COLOR_PRIMARY};
`;

export function DetailPage() {
  const params = useParams();
  const { product } = useContext(EcommerceContext);

  function isInvalidProductAndId() {
    const invalid = isNaN(params.id) || Object.keys(product).length < 1;

    if (invalid) return true;

    const productId = product.id || 0;

    if (productId.toString() !== params.id) return true;

    return false;
  }

  return (
    <Layout>
      {isInvalidProductAndId() && <Redirect to="/products" />}
      <Wrapper>
        <Back to="/products">Volver al catálogo</Back>
        <Product>
          <ProductImage>
            <img src={product.image} alt={product.name} loading="lazy" />
          </ProductImage>
          <ProductInfo>
            <ProductCategory>{product.group}</ProductCategory>
            <ProductName>{product.name}</ProductName>
            <ProductActions>
              <Button type="primary" value="Agregar" />
            </ProductActions>
            <ProductDescription>
              <p>
                ¿El romantico? Claro que tiene que ser una bebida rojo pasión,
                el té de rosas con fresa ha vuelto en Sr Ming, bebida preparada
                con mucho amor.
              </p>
              <p>Miau Ming predice qué tipo de persona eres en el amor:</p>
              <p>
                Eres Atento y detallista, mandas audios de más de 5 minutos,
                siempre te apareces con un chifita para sorprender, tu promocion
                favorita es Duo Ming
              </p>
            </ProductDescription>
          </ProductInfo>
        </Product>
      </Wrapper>
    </Layout>
  );
}
