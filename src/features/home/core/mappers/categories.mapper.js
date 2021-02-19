import { API_URL } from "../../../base";

export function mapToModel(category, index) {
  return {
    key: `category-${index}`,
    name: category.name,
    imagen: `${API_URL}/categories/${category.imagen}`,
  };
}
