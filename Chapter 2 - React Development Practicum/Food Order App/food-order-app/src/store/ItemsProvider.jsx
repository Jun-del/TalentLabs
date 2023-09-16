import PropTypes from "prop-types";
import itemsContext from "./items-context";
import { useEffect, useState } from "react";
import { MENU_ITEMS_LOCAL_STORAGE_KEY } from "../constant";

export default function ItemsProvider({ children }) {
  // ! Default: true = User page, false = Admin page
  // ! items-provider: to store the food, cart-provider: to store only items in the cart
  const [switchPage, setSwitchPage] = useState(true);

  // TODO: use zod to validate local storage data
  const initialMenuItems =
    JSON.parse(localStorage.getItem(MENU_ITEMS_LOCAL_STORAGE_KEY)) || [];

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
  const [menuItemsData, setMenuItemsData] = useState(initialMenuItems);

  function addNewItem(newItem) {
    setMenuItemsData((prevData) => [...prevData, newItem]);
  }

  useEffect(() => {
    localStorage.setItem(
      MENU_ITEMS_LOCAL_STORAGE_KEY,
      JSON.stringify(menuItemsData)
    );
  }, [menuItemsData]);

  function removeItem(id) {
    const newMenuItems = menuItemsData.filter(
      (menuItems) => menuItems.id !== id
    );

    setMenuItemsData(newMenuItems);
  }

  // TODO: update item
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
  children: PropTypes.node.isRequired,
};
