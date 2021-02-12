import { CardProduct } from "../../../components/card/products";
import { Layout } from "../../../layouts/main";
import { Categories } from "../components/categories";
import { Contactenos } from "../components/contactenos";
import { Ofertas } from "../components/ofertas";
import { Separator } from "../components/separator";

const products1 = [
  {
    image: "https://ec-qbo.herokuapp.com/products/1.png",
    group: "Grupo 1",
    name: "Producto 1",
    priceOld: 100,
    price: 50,
  },
  {
    image: "https://ec-qbo.herokuapp.com/products/2.png",
    group: "Grupo 2",
    name: "Producto 2",
    priceOld: 100,
    price: 50,
  },
  {
    image: "https://ec-qbo.herokuapp.com/products/3.png",
    group: "Grupo 3",
    name: "Producto 3",
    priceOld: 100,
    price: 50,
  },
];

const products2 = [
  {
    image: "https://ec-qbo.herokuapp.com/products/4.png",
    group: "Grupo 4",
    name: "Producto 4",
    priceOld: 100,
    price: 50,
  },
  {
    image: "https://ec-qbo.herokuapp.com/products/5.png",
    group: "Grupo 5",
    name: "Producto 5",
    priceOld: 100,
    price: 50,
  },
  {
    image: "https://ec-qbo.herokuapp.com/products/6.png",
    group: "Grupo 6",
    name: "Producto 6",
    priceOld: 100,
    price: 50,
  },
];

export const HomePage = () => (
  <Layout showDelivery={true} showBanner={true}>
    <Categories />
    <Separator />
    <Ofertas title="Nuestras ofertas de hoy" products={products1} />
    <Ofertas title="Los platos más populares" products={products2} />
    <Contactenos />
  </Layout>
);
