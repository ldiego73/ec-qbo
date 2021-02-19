import { useState } from "react";
import { EcommerceContext } from "./ecommerce.context";

const localProduct = JSON.parse(
  localStorage.getItem("selectedProduct") || "{}"
);

export function EcommerceProvider({ children }) {
  const [product, setProduct] = useState(localProduct);
  const updateProduct = (p) => {
    localStorage.setItem("selectedProduct", JSON.stringify(p));
    setProduct(p);
  };

  return (
    <EcommerceContext.Provider value={{ product, updateProduct }}>
      {children}
    </EcommerceContext.Provider>
  );
}
