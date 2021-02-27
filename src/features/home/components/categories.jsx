import { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import {
  COLOR_GRAY_LIGHT,
  TEXT_COLOR_PRIMARY,
} from "../../../components/variables";
import { useCategories } from "../core";

const Wrapper = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  cursor: pointer;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: ${COLOR_GRAY_LIGHT};
  margin-bottom: 12px;
`;

const Title = styled.div`
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${TEXT_COLOR_PRIMARY};
`;

export function Categories() {
  const categories = useCategories();
  const [selectedCategory, setSelectedCategory] = useState(null);

  function handleClick(category) {
    setSelectedCategory(category);
  }

  return (
    <Wrapper>
      {selectedCategory && (
        <Redirect
          to={{
            pathname: `/products`,
            search: `category=${selectedCategory.id}`,
          }}
        />
      )}
      {categories &&
        categories.map((item) => (
          <Icon key={item.key} onClick={() => handleClick(item)}>
            <Circle>
              <img src={item.imagen} alt={item.name} loading="lazy" />
            </Circle>
            <Title>{item.name}</Title>
          </Icon>
        ))}
    </Wrapper>
  );
}
