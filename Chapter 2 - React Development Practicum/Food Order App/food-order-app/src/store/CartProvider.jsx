import PropTypes from "prop-types";
import cartContext from "./cart-context";
import { useState } from "react";

export default function CartProvider({ children }) {
  const [item, setItem] = useState([]);

  const totalAmount = 1;

  function addItem(item) {
    setItem(item);
  }

  function removeItem(id) {
    console.log(id);
  }

  const value = {
    item,
    totalAmount,
    addItem,
    removeItem,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}

CartProvider.propTypes = {
  children: PropTypes.func,
}.isRequired;
