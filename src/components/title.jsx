import styled from "styled-components";
import { TEXT_COLOR_PRIMARY } from "./variables";

const Wrapper = styled.h2`
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  color: ${TEXT_COLOR_PRIMARY};

  ${({ flex }) => (flex ? "flex: 1;" : "")}
`;

export const Title = ({ value, flex }) => (
  <Wrapper flex={flex}>{value}</Wrapper>
);
