import styled from "styled-components";
import { PADDING } from "./variables";

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  width: 100%;
  padding: 0 ${PADDING.DEFAULT}px;

  ${({ align }) => (align ? `align-items: ${align}` : "")};
  ${({ justiy }) => (justiy ? `justify-content: ${justiy}` : "")};

  ${({ minHeight }) => (minHeight ? `min-height: ${minHeight}px` : "")};
`;

export const Content = ({ direction, align, justiy, minHeight, children }) => (
  <Wrapper
    direction={direction}
    align={align}
    justiy={justiy}
    minHeight={minHeight}
  >
    {children}
  </Wrapper>
);
