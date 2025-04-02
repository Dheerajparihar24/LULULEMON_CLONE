import { LOGIN_USER, LOGOUT_USER, REGISTER_USER } from "../actions/actionTypes";

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      const updatedUsers = [...state.users, action.payload];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return { ...state, users: updatedUsers };

    case LOGIN_USER:
      const foundUser = state.users.find(
        (user) => user.email === action.payload.email && user.password === action.payload.password
      );

      if (!foundUser) {
        alert("Invalid email or password!");
        return state;
      }

      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      return { ...state, currentUser: foundUser };

    case LOGOUT_USER:
      localStorage.removeItem("currentUser");
      return { ...state, currentUser: null };

    default:
      return state;
  }
};

export default authReducer;
