import styled from "styled-components";
import { COLOR_WHITE, COLOR_PRIMARY, TEXT_COLOR_PRIMARY } from "@components/variables";

export const Card = styled.div`
  background: ${COLOR_WHITE};
  border-radius: 20px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  padding: 40px;
  box-sizing: border-box;
`;

export const CardTitle = styled.div`
  width: 100%;
  font-weight: bold;
  font-size: 24px;
  line-height: 40px;
  color: ${TEXT_COLOR_PRIMARY};
`;

export const Form = styled.form`
  margin-top: 20px;
`;
export const FormGroup = styled.div`
  margin-bottom: 20px;
`;
export const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.015em;
  color: ${TEXT_COLOR_PRIMARY};
  margin-bottom: 8px;
`;

export const FormInput = styled.input`
  background: ${COLOR_WHITE};
  border: 1px solid #e5e7e8;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 16px 12px;
  outline: none;
  width: 100%;

  &:hover, &:focus, &:active {
    border-color: ${COLOR_PRIMARY};
  }
`;

export const FormSelect = styled.select`
  background: ${COLOR_WHITE};
  border: 1px solid #e5e7e8;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 16px 12px;
  outline: none;
  width: 100%;

  &:hover, &:focus, &:active {
    border-color: ${COLOR_PRIMARY};
  }
`;
export const FormError = styled.div`
  margin-top: 4px;
  font-size: 12px;
  color: red;
`;
