//  CONSTANTS
export const GET_PRODUCTS = "ONLINE_SHOP/PRODUCTS/GET_PRODUCTS";

// ACTIONS_CREATORS
export const getProducts = products => ({
  type: GET_PRODUCTS,
  payload: products
});
