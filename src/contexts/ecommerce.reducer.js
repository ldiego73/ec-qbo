export const SELECT_PRODUCT_EC_ACTION = "SELECT_PRODUCT_EC_ACTION";
export const ADD_PRODUCT_EC_ACTION = "ADD_PRODUCT_EC_ACTION";
export const REMOVE_PRODUCT_EC_ACTION = "REMOVE_PRODUCT_EC_ACTION";
export const UPDATE_QUANTITY_PRODUCT_EC_ACTION =
  "UPDATE_QUANTITY_PRODUCT_EC_ACTION";

export const initialState = {
  product: JSON.parse(localStorage.getItem("selectedProduct") || "{}"),
  cart: JSON.parse(localStorage.getItem("cart") || "[]"),
};

function selectProduct(state, product) {
  localStorage.setItem("selectedProduct", JSON.stringify(product));

  return { ...state, product };
}

function addProduct(state, product) {
  const cart = [ ...state.cart ];
  const matchedProduct = cart.findIndex((p) => p.id === product.id);

  if (matchedProduct < 0) {
    cart.push({ ...product, quantity: 1 });
  } else {
    const updatedProduct = { ...cart[matchedProduct] };

    updatedProduct.quantity+=1;

    cart[matchedProduct] = updatedProduct;
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  return { ...state, cart };
}

function removeProductById(state, productId) {
  const cart = [...state.cart];
  const matchedProduct = cart.findIndex((p) => p.id === productId);
  const updatedProduct = { ...cart[matchedProduct] };

  updatedProduct.quantity-=1;

  if (updatedProduct.quantity <= 0) cart.splice(matchedProduct, 1);
  else cart[matchedProduct] = updatedProduct;

  localStorage.setItem("cart", JSON.stringify(cart));

  return { ...state, cart };
}

function updateQuantityProduct(state, productId, quantity) {
  const cart = [...state.cart];
  const matchedProduct = cart.findIndex((p) => p.id === productId);
  const updatedProduct = { ...cart[matchedProduct] };

  updatedProduct.quantity = quantity;
  cart[matchedProduct] = updatedProduct;

  localStorage.setItem("cart", JSON.stringify(cart));

  return { ...state, cart };
}

export function reducer(state, action) {
  switch (action.type) {
    case SELECT_PRODUCT_EC_ACTION:
      return selectProduct(state, action.selectProduct);
    case ADD_PRODUCT_EC_ACTION:
      return addProduct(state, action.product);
    case REMOVE_PRODUCT_EC_ACTION:
      return removeProductById(state, action.productId);
    case UPDATE_QUANTITY_PRODUCT_EC_ACTION:
      return updateQuantityProduct(state, action.productId, action.quantity);
    default:
      return { ...state };
  }
}
