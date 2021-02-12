import { Route, Switch } from "react-router-dom";

import { LoginPage } from "./oauth/pages/login";
import { HomePage } from "./home/pages";
import { HistoryPage } from "./home/pages/history";
import { NotFoundPage } from "./home/pages/not-found";
import { CartPage } from "./cart/pages";
import { CheckoutPage } from "./checkout/pages";
import { ProductsPage } from "./products/pages";

export const Navigation = () => (
  <Switch>
    <Route exact path="/oauth/login" component={LoginPage} />
    <Route exact path="/" component={HomePage} />
    <Route exact path="/history" component={HistoryPage} />
    <Route exact path="/cart" component={CartPage} />
    <Route exact path="/checkout" component={CheckoutPage} />
    <Route exact path="/products" component={ProductsPage} />
    <Route path="*" component={NotFoundPage} />
  </Switch>
);
