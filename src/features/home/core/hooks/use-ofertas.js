/* eslint-disable import/no-unresolved */

import { API_URL } from "@features/base";
import { useFetch } from "@hooks/use-fetch";

import { mapToModel } from "../mappers/product.mapper";

export function useOfertas() {
  const [ofertas] = useFetch(`${API_URL}/oferts`);

  return ofertas && ofertas.map((p, i) => mapToModel(p, i));
}
