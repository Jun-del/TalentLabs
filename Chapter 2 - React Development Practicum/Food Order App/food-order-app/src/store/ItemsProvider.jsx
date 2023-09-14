import PropTypes from "prop-types";
import itemsContext from "./items-context";
import { useState } from "react";

export default function ItemsProvider({ children }) {
  // ! Default: true = User page, false = Admin page
  // ! items-provider: to store the food, cart-provider: to store only items in the cart
  const [switchPage, setSwitchPage] = useState(true);

  const [menuItemsData, setMenuItemsData] = useState([]);
  /**
   *  Mock for menuItemsData = [
   * {
   *  id: string,
   *  name: string,
   *  description: string,
   *  price: float/double,
   *  image: ,
   * }
   * ]
   * */

  function addNewItem(newItem) {
    setMenuItemsData((prevData) => [...prevData, newItem]);
  }

  function removeItem(id) {
    console.log(id);
  }

  function updateItem(id) {
    console.log(id);
  }

  function togglePage() {
    setSwitchPage((prevPage) => !prevPage);
  }

  const value = {
    itemsData: menuItemsData,
    switchPage,
    addNewItem,
    removeItem,
    updateItem,
    togglePage,
  };

  return (
    <itemsContext.Provider value={value}>{children}</itemsContext.Provider>
  );
}

ItemsProvider.propTypes = {
  children: PropTypes.func,
}.isRequired;
