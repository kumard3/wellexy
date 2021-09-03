// import Cookies from "js-cookie";
import ls from 'local-storage'
import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {

  // darkMode: ls.get('darkMode') === 'ON' ? true : false,
  cart: {
    cartItems: ls.get("cartItems")
      ? JSON.parse(ls.get("cartItems"))
      : [],
    shippingAddress: ls.get("shippingAddress")
      ? JSON.parse(ls.get("shippingAddress"))
      : {},
    paymentMethod: ls.get("paymentMethod")
      ? ls.get("paymentMethod")
      : "",
  },
  userInfo: ls.get("userInfo")
    ? JSON.parse(ls.get("userInfo"))
    : null,
};

function reducer(state, action) {
  switch (action.type) {

    case "CART_ADD_ITEM": {
      const newItem = action.payload;
      const existItem = state.cart.cartItems.find(
        (item) => item._id === newItem._id
      );
      const cartItems = existItem
        ? state.cart.cartItems.map((item) =>
            item.name === existItem.name ? newItem : item
          )
        : [...state.cart.cartItems, newItem];
      ls.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "CART_REMOVE_ITEM": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      ls.set("cartItems", JSON.stringify(cartItems));
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "SAVE_SHIPPING_ADDRESS":
      return {
        ...state,
        cart: { ...state.cart, shippingAddress: action.payload },
      };
    case "SAVE_PAYMENT_METHOD":
      return {
        ...state,
        cart: { ...state.cart, paymentMethod: action.payload },
      };
    case "CART_CLEAR":
      return { ...state, cart: { ...state.cart, cartItems: [] } };
    case "USER_LOGIN":
      return { ...state, userInfo: action.payload };
    case "USER_LOGOUT":
      return {
        ...state,
        userInfo: null,
        cart: { cartItems: [], shippingAddress: {}, paymentMethod: "" },
      };

    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
