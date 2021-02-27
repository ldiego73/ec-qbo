import styled from "styled-components";

import { COLOR_GRAY_LIGHT } from "../../../components/variables";

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid ${COLOR_GRAY_LIGHT};
  margin-bottom: 52px;
`;

export const Separator = () => <Wrapper />;
