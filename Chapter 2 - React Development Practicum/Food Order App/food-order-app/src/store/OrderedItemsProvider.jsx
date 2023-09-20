import PropTypes from "prop-types";
import orderedItemsContext from "./ordered-items-context";
import { useEffect, useState } from "react";
import { ORDER_ITEMS_LOCAL_STORAGE_KEY } from "../constant";
import { useMemo } from "react";

export default function OrderedItemsProvider({ children }) {
  const initialOrderedItems =
    JSON.parse(localStorage.getItem(ORDER_ITEMS_LOCAL_STORAGE_KEY)) || [];

  const [orderedItems, setOrderedItems] = useState(initialOrderedItems);

  const totalAmount = useMemo(() => {
    if (orderedItems.length < 1) {
      return 0;
    }

    return orderedItems.reduce(
      (acc, curr) => acc + curr.totalPriceForAllItems,
      0
    );
  }, [orderedItems]);

  useEffect(() => {
    localStorage.setItem(
      ORDER_ITEMS_LOCAL_STORAGE_KEY,
      JSON.stringify(orderedItems)
    );
  }, [orderedItems]);

  function addOrderItem(newItem) {
    setOrderedItems((prevData) => [...prevData, newItem]);
  }

  function removeOrderItem(customerId, itemId) {
    setOrderedItems((prevData) => {
      return prevData.map((customer) => {
        if (customer.customerId === customerId) {
          customer.orderedItems = customer.orderedItems.filter(
            (orderedItem) => orderedItem.id !== itemId
          );
        }

        return customer;
      });
    });
  }

  function clearOrderedItems() {
    setOrderedItems([]);
  }

  const value = {
    orderedItems,
    totalAmount,
    addOrderItem,
    removeOrderItem,
    clearOrderedItems,
  };

  return (
    <orderedItemsContext.Provider value={value}>
      {children}
    </orderedItemsContext.Provider>
  );
}

OrderedItemsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
