import { Layout } from "../../../layouts/main";
import { Categories } from "../components/categories";
import { Contactenos } from "../components/contactenos";
import { Ofertas } from "../components/ofertas";
import { Separator } from "../components/separator";

import { useOfertas, usePopulares } from "../core";

export function HomePage() {
  const ofertas = useOfertas();
  const populares = usePopulares();

  return (
    <Layout showDelivery={true} showBanner={true}>
      <Categories />
      <Separator />
      {ofertas && (
        <Ofertas title="Nuestras ofertas de hoy" products={ofertas} />
      )}
      {populares && (
        <Ofertas title="Los platos más populares" products={populares} />
      )}
      <Contactenos />
    </Layout>
  );
}
