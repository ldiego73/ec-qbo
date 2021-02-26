import { useFetch } from "../../../../hooks/use-fetch";
import { API_URL } from "../../../base";
import { mapToModel } from "../mappers/product.mapper";

function findProductByName(product, name) {
  const productName = product.name.toLowerCase();
  const groupName = product.group.toLowerCase();
  const searchName = name.toLowerCase();

  return (
    productName.indexOf(searchName) > -1 || groupName.indexOf(searchName) > -1
  );
}

export function useProducts(categoryId, name) {
  const [products] = useFetch(`${API_URL}/products`);

  if (!products) return null;

  const data = [];
  let i = 0;

  let findProducts;

  if (categoryId) {
    findProducts = products.filter(
      (product) => product.category_id === categoryId
    );
  } else {
    findProducts = [...products];
  }

  if (name) {
    findProducts = products.filter((product) =>
      findProductByName(product, name)
    );
  }

  findProducts.forEach((product, index) => {
    if (index % 3 === 0) data[i] = [];

    data[i].push({
      key: `product-${index}`,
      product: mapToModel(product),
    });

    if (index % 3 === 2) i+=1;
  });

  return data;
}
