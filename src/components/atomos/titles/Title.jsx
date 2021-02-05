import styled from "styled-components";
import { textColorPrimary } from "../../common";

const TitleWrapper = styled.h2`
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  color: ${textColorPrimary};
`;

export const Title = ({ value }) => <TitleWrapper>{value}</TitleWrapper>;
