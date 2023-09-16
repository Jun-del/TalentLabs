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
        return item; // Return the item unchanged if it's not the one to decrement
      });
    }
    case "REMOVE_ITEM": {
      return state.filter((item) => item.id !== action.id);
    }
    default: {
      return state;
    }
  }
}

export default function CartProvider({ children }) {
  // * Mock for cart item:
  // const initialCartItems = [
  //   {
  //     id: "1",
  //     name: "Burger",
  //     price: 10,
  //     quantity: 1,
  //   },
  //  ]

  // TODO: use Zod to validate the local storage data
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

  const totalAmount = useMemo(() => {
    return cartItems.reduce((acc, item) => {
      return (acc + item.price * item.quantity).toFixed(2);
    }, 0);
  }, [cartItems]);

  const value = {
    items: cartItems,
    totalAmount,
    addItem,
    removeItem,
    incrementItem: increment,
    decrementItem: decrement,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
