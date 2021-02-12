import { Redirect } from "react-router-dom";
import { Layout } from "../../../layouts/main";

const loggedIn = localStorage.getItem("loggedIn");

export const CheckoutPage = () => (
  <Layout>
    {!loggedIn && <Redirect to="/oauth/login" />}
    <h1>Checkout Page</h1>
  </Layout>
);
