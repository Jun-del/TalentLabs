import { useState } from "react";
import CartProvider from "../store/CartProvider";
import Cart from "../components/users/Cart";
import Banner from "../components/users/Banner";
import AboutUs from "../components/users/AboutUs";
import Meals from "../components/Meals";
import CartAppBar from "../components/users/CartAppBar";
import { useItemscontext } from "../store/items-context";

const Users = () => {
  const { itemsData } = useItemscontext();

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleCartOpen() {
    setIsModalOpen(true);
  }

  function handleCartClose(_event, reason) {
    if (reason === "escapeKeyDown" || reason === "backdropClick") {
      return;
    }

    setIsModalOpen(false);
  }

  return (
    <CartProvider>
      <CartAppBar handleClick={handleCartOpen} />

      <Cart open={isModalOpen} handleClose={handleCartClose} />

      <Banner />
      <h1>User Page</h1>

      <section>
        <AboutUs />

        {/* TODO: handle no items */}
        {itemsData.length > 0 ? <Meals /> : <h1>No items in the menu</h1>}
      </section>
    </CartProvider>
  );
};

export default Users;
