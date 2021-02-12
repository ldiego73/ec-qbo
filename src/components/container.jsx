import styled from "styled-components";
import { CONTAINER_WIDTH } from "./variables";

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: ${CONTAINER_WIDTH}px;
  width: auto;
  height: ${({ height }) => (height ? `${height}px` : "auto")};

  @media screen and (max-width: 768px) {
    max-width: auto;
    width: 100%;
  }
`;

export const Container = ({ children, height }) => (
  <Wrapper height={height}>{children}</Wrapper>
);
