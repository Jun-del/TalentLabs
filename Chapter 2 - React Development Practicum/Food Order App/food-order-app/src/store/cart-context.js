import { createContext, useContext } from "react";

const cartContext = createContext({
  /* eslint-disable no-unused-vars */
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  incrementItem: (id) => {},
  decrementItem: (id) => {},
});

export default cartContext;

export const useCartContext = () => useContext(cartContext);
