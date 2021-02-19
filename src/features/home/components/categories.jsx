import styled from "styled-components";
import { useState, useEffect } from "react";
import { useCategories } from "../core";

import {
  COLOR_GRAY_LIGHT,
  TEXT_COLOR_PRIMARY,
} from "../../../components/variables";

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

  return (
    <Wrapper>
      {categories &&
        categories.map((item) => (
          <Icon key={item.key}>
            <Circle>
              <img src={item.imagen} alt={item.name} loading="lazy" />
            </Circle>
            <Title>{item.name}</Title>
          </Icon>
        ))}
    </Wrapper>
  );
}
