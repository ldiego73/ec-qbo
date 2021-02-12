import { Layout } from "../../../layouts/main";

export const LoginPage = () => {
  localStorage.setItem("loggedIn", true);

  return (
    <Layout>
      <h1>Login Page</h1>
    </Layout>
  );
};
