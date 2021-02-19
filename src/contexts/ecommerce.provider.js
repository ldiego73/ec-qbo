import { useState } from "react";
import { EcommerceContext } from "./ecommerce.context";

export function EcommerceProvider({ children }) {
  const [product, setProduct] = useState({});
  const updateProduct = (p) => setProduct(p);

  return (
    <EcommerceContext.Provider value={{ product, updateProduct }}>
      {children}
    </EcommerceContext.Provider>
  );
}
