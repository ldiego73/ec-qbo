import { useFetch } from "../../../../hooks/use-fetch";
import { API_URL } from "../../../base";

export function useCategories() {
  const [categories] = useFetch(`${API_URL}/categories`);

  return categories;
}
