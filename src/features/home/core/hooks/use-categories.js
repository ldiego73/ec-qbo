/* eslint-disable import/no-unresolved */

import { API_URL } from "@features/base";
import { useFetch } from "@hooks/use-fetch";

import { mapToModel } from "../mappers/categories.mapper";

export function useCategories() {
  const [categories] = useFetch(`${API_URL}/categories`);

  return categories && categories.map((c, i) => mapToModel(c, i));
}
