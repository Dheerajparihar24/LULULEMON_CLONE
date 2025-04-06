import { ADD_TO_CART, REMOVE_FROM_CART } from "./actionTypes";

export const addToCart = (product, selectedColor, selectedSize) => {
  return {
    type: ADD_TO_CART,
    payload: {
      ...product,
      selectedColor,
      selectedSize,
      count: 1,
    },
  };
};

export const removeFromCart = (id) => {
  return {
    type: REMOVE_FROM_CART,
    payload: id,
  };
};
