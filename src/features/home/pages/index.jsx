import axios from "axios";
import { useState, useEffect } from "react";

import { Layout } from "../../../layouts/main";
import { Categories } from "../components/categories";
import { Contactenos } from "../components/contactenos";
import { Ofertas } from "../components/ofertas";
import { Separator } from "../components/separator";

const url = "https://ec-qbo.herokuapp.com";

function mapToModel(product, index) {
  return {
    key: `product-${index}`,
    name: product.name,
    group: product.group,
    price: product.price,
    priceOld: product.price_old,
    image: `${url}/products/${product.imagen}`,
  };
}

export function HomePage() {
  const [ofertas, setOfertas] = useState(null);
  const [populares, setPopulares] = useState([]);
  const resources = {
    OFERTAS: "oferts",
    POPULARES: "populars",
  };

  async function getProducts(resource) {
    const { data } = await axios.get(`${url}/${resource}`);
    const products = data.map((p, i) => mapToModel(p, i));

    if (resource === resources.OFERTAS) setOfertas(products);
    else if (resource === resources.POPULARES) setPopulares(products);
  }

  useEffect(() => {
    getProducts(resources.OFERTAS);
    getProducts(resources.POPULARES);
  }, []);

  return (
    <Layout showDelivery={true} showBanner={true}>
      <Categories />
      <Separator />
      {ofertas && (
        <Ofertas title="Nuestras ofertas de hoy" products={ofertas} />
      )}
      <Ofertas title="Los platos más populares" products={populares} />
      <Contactenos />
    </Layout>
  );
}
