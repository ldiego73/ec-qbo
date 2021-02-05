import styled from "styled-components";
import { colorPrimary, colorWhite } from "../../common";

const ButtonWrapper = styled.button`
  padding: 11px 28px 9px;
  width: auto;
  height: 40px;
  left: 0px;
  top: 245px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  background: ${colorPrimary};
  color: ${colorWhite};
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
`;

export const Button = ({ value }) => <ButtonWrapper>{value}</ButtonWrapper>;
