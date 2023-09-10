import { createContext } from "react";

const itemContext = createContext({
  itemsDate: [],
  switchPage: null,
  addNewItem: (item) => {},
  removeItem: (id) => {},
  updateItem: (id) => {},
  togglePage: () => {},
});

export default itemContext;
