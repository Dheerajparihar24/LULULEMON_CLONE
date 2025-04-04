import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actionTypes";

const initialState = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const updatedCart = [...state.cart, action.payload];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { ...state, cart: updatedCart };

    case REMOVE_FROM_CART:
      const filteredCart = [
        ...state.cart.filter((item) => item.id !== action.payload),
      ];
      localStorage.setItem("cart", JSON.stringify(filteredCart));
      return {
        ...state,
        cart: filteredCart,
      };
    default:
      return state;
  }
};

export default cartReducer;
