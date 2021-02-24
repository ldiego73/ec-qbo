import styled from "styled-components";
import { useState, useContext, useReducer } from "react";

import {
  TEXT_COLOR_PRIMARY,
  TEXT_COLOR_SECONDARY,
} from "../../../components/variables";

import { Layout } from "../../../layouts/main";
import { CardProduct } from "../../../components/card/products";

import { useCategories, useProducts } from "../core/hooks";
import { Redirect } from "react-router-dom";
import { EcommerceContext } from "../../../contexts/ecommerce.context";
import { initialState, reducer, SELECT_CATEGORY_ACTION, SELECT_PRODUCT_ACTION, SET_NAME_ACTION } from "../core/reducers/products.reducer";

const Wrapper = styled.div`
  display: flex;
  margin-top: 44px;
`;

const Sidebar = styled.div`
  width: 280px;
  background: #fafafa;
  border-radius: 20px;
  padding: 40px 32px;
  margin-bottom: 40px;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 40px;
  color: ${TEXT_COLOR_PRIMARY};
  margin-bottom: 28px;
`;

const Search = styled.div``;
const SearchTitle = styled.div`
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.015em;
  color: ${TEXT_COLOR_PRIMARY};
  margin-bottom: 4px;
`;
const SearchInput = styled.input`
  border: 1px solid #e5e7e8;
  box-sizing: border-box;
  border-radius: 4px;
  width: 100%;
  height: 48px;
  padding: 16px 12px;
  outline: none;
`;

const Categories = styled.div`
  margin-top: 32px;
`;
const Category = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  margin-bottom: 28px;
  cursor: pointer;
  color: ${({ selected }) =>
    selected ? TEXT_COLOR_SECONDARY : TEXT_COLOR_PRIMARY};

  &:last-child {
    margin-bottom: 0;
  }
`;

const Products = styled.div`
  flex: 1;
  margin-left: 40px;
`;
const ProductRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export function ProductsPage() {
  const { updateProduct, addProductToCart } = useContext(EcommerceContext);
  const categories = useCategories();
  const [state, dispatch] = useReducer(reducer, initialState);

  const products = useProducts(state.category, state.name);

  function handleChangeName(value) {
    dispatch({ type: SET_NAME_ACTION, name: value });
  }

  function handleCategoryClicked(category) {
    if (category.id === state.category) {
      dispatch({ type: SELECT_CATEGORY_ACTION, category: 0 });
    } else {
      dispatch({ type: SELECT_CATEGORY_ACTION, category: category.id });
    }
  }

  function handleProductClicked(p) {
    updateProduct(p);
    dispatch({ type: SELECT_PRODUCT_ACTION, product: p });
  }

  function handleAddProduct(product) {
    addProductToCart(product);
  }

  return (
    <Layout showDelivery={true}>
      {state.product && (
        <Redirect
          to={{
            pathname: `/products/${state.product.id}`,
          }}
        />
      )}
      <Wrapper>

        <Sidebar>
          <Title>Nuestros Productos</Title>
          <Search>
            <SearchTitle>Buscar Producto</SearchTitle>
            <SearchInput
              type="text"
              placeholder="Nombre del producto"
              onChange={(event) => handleChangeName(event.target.value)}
            />
          </Search>
          <Categories>
            {categories &&
              categories.map((c, i) => (
                <Category
                  key={`category-${i}`}
                  selected={state.category === c.id}
                  onClick={() => handleCategoryClicked(c)}
                >
                  {c.name}
                </Category>
              ))}
          </Categories>
        </Sidebar>
        <Products>
          {products ? (
            products.length > 0 ? (
              products.map((items, index) => (
                <ProductRow key={`product-row-${index}`}>
                  {items.map(({ product, key }) => (
                    <CardProduct
                      key={key}
                      product={product}
                      width={280}
                      onClicked={handleProductClicked}
                      onAddProduct={() => handleAddProduct(product)}
                    />
                  ))}
                </ProductRow>
              ))
            ) : (
              <div>Not Found</div>
            )
          ) : (
            <div>Loading...</div>
          )}
        </Products>
      </Wrapper>
    </Layout>
  );
}
