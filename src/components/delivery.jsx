import styled from "styled-components";

import { COLOR_SECONDARY, TEXT_COLOR_INVERSE } from "./variables";

const Wrapper = styled.div`
  background: ${COLOR_SECONDARY};
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;

  text-align: center;
  color: ${TEXT_COLOR_INVERSE};
  padding: 10px 0;
`;

export const Delivery = () => (
  <Wrapper>Delivery a San Miguel, La Perla, Magdalena y Pueblo Libre</Wrapper>
);
