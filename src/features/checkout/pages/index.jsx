import { Title } from "@components/title";
import { Layout } from "@layouts/main";
import styled from "styled-components";

import { FormSchema } from "../components/form-schema";

const Wrapper = styled.div`
  margin: 60px 0;
`;

export const CheckoutPage = () => (
  <Layout>
    <Wrapper>
      <Title value="Finalizar Compra" />
      <FormSchema />
    </Wrapper>
  </Layout>
);
