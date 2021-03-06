/* eslint-disable import/no-unresolved */

import { API_URL } from "@features/base";
import { useFetch } from "@hooks/use-fetch";

import { mapToModel } from "../mappers/product.mapper";

export function usePopulares() {
  const [populares] = useFetch(`${API_URL}/populars`);

  return populares && populares.map((p, i) => mapToModel(p, i));
}
