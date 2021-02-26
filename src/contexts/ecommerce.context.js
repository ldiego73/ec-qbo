/* eslint-disable no-unused-vars */

import { createContext } from "react";

export const EcommerceContext = createContext({
  product: {},
  cart: [],
  addProductToCart(product) {},
  removeProductToCart(productId) {},
  updateProductQuantityToCart(productId, quantity) {},
  updateProduct() {},
});
