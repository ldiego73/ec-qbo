import { Route, Switch } from "react-router-dom";

import { CartPage } from "./cart/pages";
import { CheckoutPage } from "./checkout/pages";
import { HomePage } from "./home/pages";
import { HistoryPage } from "./home/pages/history";
import { NotFoundPage } from "./home/pages/not-found";
import { LoginPage } from "./oauth/pages/login";
import { ProductsPage } from "./products/pages";
import { DetailPage } from "./products/pages/detail";

export const Navigation = () => (
  <Switch>
    <Route exact path="/oauth/login" component={LoginPage} />
    <Route exact path="/" component={HomePage} />
    <Route exact path="/history" component={HistoryPage} />
    <Route exact path="/cart" component={CartPage} />
    <Route exact path="/checkout" component={CheckoutPage} />
    <Route exact path="/products" component={ProductsPage} />
    <Route exact path="/products/:id" component={DetailPage} />
    <Route path="*" component={NotFoundPage} />
  </Switch>
);
