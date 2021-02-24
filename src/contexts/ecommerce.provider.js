import { useReducer } from "react";
import { EcommerceContext } from "./ecommerce.context";
import {
  reducer,
  initialState,
  SELECT_PRODUCT_EC_ACTION,
  ADD_PRODUCT_EC_ACTION,
  REMOVE_PRODUCT_EC_ACTION,
  UPDATE_QUANTITY_PRODUCT_EC_ACTION,
} from "./ecommerce.reducer";

export function EcommerceProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateProduct = (product) => {
    dispatch({ type: SELECT_PRODUCT_EC_ACTION, selectProduct: product });
  };

  const addProductToCart = (product) => {
    dispatch({ type: ADD_PRODUCT_EC_ACTION, product });
  };

  const removeProductToCart = (productId) => {
    dispatch({ type: REMOVE_PRODUCT_EC_ACTION, productId });
  };

  const updateProductQuantityToCart = (productId, quantity) => {
    dispatch({ type: UPDATE_QUANTITY_PRODUCT_EC_ACTION, productId, quantity });
  };

  return (
    <EcommerceContext.Provider
      value={{
        product: state.product,
        cart: state.cart,
        updateProduct,
        addProductToCart,
        removeProductToCart,
        updateProductQuantityToCart,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
}
