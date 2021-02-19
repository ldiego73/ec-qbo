import { API_URL } from "../../../base";

export function mapToModel(category, index) {
  return {
    id: category.id,
    key: `category-${index}`,
    name: category.name,
    imagen: `${API_URL}/categories/${category.imagen}`,
  };
}
