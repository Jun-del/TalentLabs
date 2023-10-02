import PropTypes from "prop-types";
import cartContext from "./cart-context";
import { useEffect, useMemo, useReducer } from "react";
import { CART_ITEMS_LOCAL_STORAGE_KEY } from "../constant";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.find((item) => item.id === action.item.id);

      if (existingItem) {
        return state.map((item) =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...state, action.item];
    }
    case "INCREMENT": {
      return state.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
    }
    case "DECREMENT": {
      return state.map((item) => {
        if (item.id === action.id) {
          if (item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
        }
        return item;
      });
    }
    case "REMOVE_ITEM": {
      return state.filter((item) => item.id !== action.id);
    }
    case "CLEAR_CART": {
      return [];
    }
    default: {
      return state;
    }
  }
}

export default function CartProvider({ children }) {
  const initialCartItems =
    JSON.parse(localStorage.getItem(CART_ITEMS_LOCAL_STORAGE_KEY)) || [];

  const [cartItems, dispatch] = useReducer(cartReducer, initialCartItems);

  useEffect(() => {
    localStorage.setItem(
      CART_ITEMS_LOCAL_STORAGE_KEY,
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  function addItem(item) {
    dispatch({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatch({ type: "REMOVE_ITEM", id });
  }

  function increment(id) {
    dispatch({ type: "INCREMENT", id });
  }

  function decrement(id) {
    dispatch({ type: "DECREMENT", id });
  }

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  const totalAmount = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      const totalPrice = acc + item.price * item.quantity;
      return Number(totalPrice.toFixed(2));
    }, 0);
  }, [cartItems]);

  const value = {
    items: cartItems,
    totalAmount,
    addItem,
    removeItem,
    incrementItem: increment,
    decrementItem: decrement,
    clearCart,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
