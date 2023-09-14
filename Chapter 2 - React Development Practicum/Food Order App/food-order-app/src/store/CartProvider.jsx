import PropTypes from "prop-types";
import cartContext from "./cart-context";
import { useState } from "react";

export default function CartProvider({ children }) {
  // ! Default: true = User page, false = Admin page
  // ! items-provider: to store the food, cart-provider: to store only items in the cart

  // ! This is used for cart only not the menu items
  const [cartItems, setCartItems] = useState([]);

  const totalAmount = 1;

  function addItem(item) {
    setCartItems((prevcartItems) => [...prevcartItems, item]);
  }

  function removeItem(id) {
    console.log(id);
  }

  const value = {
    item: cartItems,
    totalAmount,
    addItem,
    removeItem,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}

CartProvider.propTypes = {
  children: PropTypes.func,
}.isRequired;
