import styled from "styled-components";
import { Layout } from "@layouts/main";
import { Title } from "@components/title";

import { FormSimple } from "../components/form-simple";
import { FormHooks } from "../components/form-hooks";
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
