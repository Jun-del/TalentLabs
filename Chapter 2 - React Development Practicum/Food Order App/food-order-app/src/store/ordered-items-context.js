import { createContext, useContext } from "react";

const orderedItemsContext = createContext({
  /* eslint-disable no-unused-vars */
  orderedItems: [],
  totalAmount: 0,
  addOrderItem: (newItem) => {},
  removeOrderItem: (customerId, itemId) => {},
  clearOrderedItems: () => {},
});

export default orderedItemsContext;

export const useOrderedItemsContext = () => useContext(orderedItemsContext);
