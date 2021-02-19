import { API_URL } from "../../../base";

export function mapToModel(product, index) {
  return {
    key: `product-${index}`,
    name: product.name,
    group: product.group,
    price: product.price,
    priceOld: product.price_old,
    image: `${API_URL}/products/${product.imagen}`,
  };
}
