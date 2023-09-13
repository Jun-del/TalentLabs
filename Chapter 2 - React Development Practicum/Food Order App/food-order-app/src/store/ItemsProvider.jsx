import PropTypes from "prop-types";
import itemsContext from "./items-context";
import { useState } from "react";

export default function ItemsProvider({ children }) {
  // @ Default: true = User page, false = Admin page
  const [switchPage, setSwitchPage] = useState(true);

  const itemsDate = [];

  function addNewItem(item) {
    console.log(item);
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
    itemsDate,
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
