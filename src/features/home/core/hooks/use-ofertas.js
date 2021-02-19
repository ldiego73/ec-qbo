import { useFetch } from "@hooks/use-fetch";
import { API_URL } from "@features/base";
import { mapToModel } from "../mappers/product.mapper";

export function useOfertas() {
  const [ofertas] = useFetch(`${API_URL}/oferts`);

  return ofertas && ofertas.map((p, i) => mapToModel(p, i));
}
