import styled from "styled-components";
import { useState, useEffect } from "react";

import {
  TEXT_COLOR_PRIMARY,
  TEXT_COLOR_SECONDARY,
} from "../../../components/variables";

import { Layout } from "../../../layouts/main";
import { useFetch } from "../../../hooks/use-fetch";
import { CardProduct } from "../../../components/card/products";

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

const url = "https://ec-qbo.herokuapp.com";

export function ProductsPage() {
  const [categories] = useFetch(`${url}/categories`);
  const [dataProducts] = useFetch(`${url}/products`);
  const [products, setProducts] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(-1);

  function handleChangeName(name) {
    setProducts(getProducts(0, name));
    setSelectedCategory(0);
  }

  function handleCategoryClicked(category) {
    if (category.id === selectedCategory) {
      setSelectedCategory(-1);
      setProducts(getProducts());
    } else {
      setSelectedCategory(category.id);
      setProducts(getProducts(category.id));
    }
  }

  function mapToModel(product) {
    return {
      id: product.id,
      category: product.category_id,
      group: product.group,
      name: product.name,
      price: product.price,
      priceOld: product.price_old,
      image: `${url}/products/${product.image}`,
    };
  }

  function findProductByName(product, name) {
    const productName = product.name.toLowerCase();
    const groupName = product.group.toLowerCase();
    const searchName = name.toLowerCase();

    return (
      productName.indexOf(searchName) > -1 || groupName.indexOf(searchName) > -1
    );
  }

  function getProducts(categoryId, name) {
    const data = [];
    let j = 0;

    let findProducts;

    if (categoryId) {
      findProducts = dataProducts.filter(
        (product) => product.category_id === categoryId
      );
    } else {
      findProducts = [...dataProducts];
    }

    if (name) {
      findProducts = dataProducts.filter((product) =>
        findProductByName(product, name)
      );
    }

    findProducts.forEach((product, index) => {
      if (index % 3 === 0) data[j] = [];

      data[j].push({
        key: `product-${index}`,
        product: mapToModel(product),
      });

      if (index % 3 === 2) j++;
    });

    return data;
  }

  useEffect(() => {}, [categories]);
  useEffect(() => {
    if (dataProducts) {
      const result = getProducts();

      setProducts(result);
    }
  }, [dataProducts]);

  return (
    <Layout showDelivery={true}>
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
                  selected={selectedCategory === c.id}
                  onClick={() => handleCategoryClicked(c)}
                >
                  {c.name}
                </Category>
              ))}
          </Categories>
        </Sidebar>
        <Products>
          {products ? (
            products.map((items, index) => (
              <ProductRow key={`product-row-${index}`}>
                {items.map(({ product, key }) => (
                  <CardProduct key={key} product={product} width={280} />
                ))}
              </ProductRow>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </Products>
      </Wrapper>
    </Layout>
  );
}
