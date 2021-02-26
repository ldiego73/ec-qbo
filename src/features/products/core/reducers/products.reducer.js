export const SELECT_CATEGORY_ACTION = "SELECT_CATEGORY_ACTION";
export const SELECT_PRODUCT_ACTION = "SELECT_PRODUCT_ACTION";
export const SET_NAME_ACTION = "SET_NAME_ACTION";

function getDefaultCategory() {
  const query = new URLSearchParams(window.location.search);

  if (query.has("category")) return parseInt(query.get("category"), 10);

  return 0;
}

export const initialState = {
  category: getDefaultCategory(),
  product: null,
  name: "",
};

export function reducer(state, action) {
  switch (action.type) {
    case SELECT_CATEGORY_ACTION:
      return { ...state, category: action.category };
    case SELECT_PRODUCT_ACTION:
      return { ...state, product: action.product };
    case SET_NAME_ACTION:
      return { ...state, name: action.name };
    default:
      return { ...state };
  }
}
