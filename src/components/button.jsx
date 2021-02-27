import React from "react";
import styled from "styled-components";

import {
  BUTTON_HEIGHT,
  COLOR_PRIMARY,
  COLOR_SECONDARY,
  COLOR_WHITE,
  TEXT_COLOR_INVERSE,
  TEXT_COLOR_SECONDARY,
} from "./variables";

const getBackground = (type) => {
  if (type === "primary") return COLOR_PRIMARY;
  if (type === "inverse") return COLOR_SECONDARY;
  return COLOR_WHITE;
};

const getColor = (type) => {
  if (type === "primary" || type === "inverse") return TEXT_COLOR_INVERSE;
  return TEXT_COLOR_SECONDARY;
};

const Wrapper = styled.button`
  padding: 11px 28px 9px;
  width: auto;
  height: ${BUTTON_HEIGHT};

  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  background: ${({ type }) => getBackground(type)};
  color: ${({ type }) => getColor(type)};

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  cursor: pointer;
`;

export const Button = ({ type, value, onButtonClicked }) => {
  const handleButtonClicked = () => {
    if (typeof onButtonClicked === "function") onButtonClicked();
  };

  return (
    <Wrapper data-testid="button" type={type} onClick={handleButtonClicked}>
      {value}
    </Wrapper>
  );
};
