import { useFetch } from "../../../../hooks/use-fetch";
import { API_URL } from "../../../base";
import { mapToModel } from "../mappers/categories.mapper";

export function useCategories() {
  const [categories] = useFetch(`${API_URL}/categories`);

  return categories && categories.map((c, i) => mapToModel(c, i));
}
