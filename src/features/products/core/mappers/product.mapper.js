import { API_URL } from "../../../base";

export function mapToModel(product) {
  return {
    id: product.id,
    category: product.category_id,
    group: product.group,
    name: product.name,
    price: product.price,
    priceOld: product.price_old,
    image: `${API_URL}/products/${product.image}`,
  };
}
