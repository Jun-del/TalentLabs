import { createContext, useContext } from "react";

const itemsContext = createContext({
  /* eslint-disable no-unused-vars */
  itemsData: [],
  switchPage: null,
  addNewItem: (item) => {},
  removeItem: (id) => {},
  updateItem: (id) => {},
  togglePage: () => {},
});

export default itemsContext;

export const useItemscontext = () => useContext(itemsContext);
