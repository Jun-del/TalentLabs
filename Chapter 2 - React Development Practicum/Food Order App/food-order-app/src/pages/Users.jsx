import { useState } from "react";
import CartProvider from "../store/CartProvider";

import Cart from "../components/users/Cart";
import Banner from "../components/users/Banner";
import AboutUs from "../components/users/AboutUs";
import Meals from "../components/Meals";
import CartAppBar from "../components/users/CartAppBar";

const Users = () => {
  // * isOpen === isValid to open modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <CartProvider>
      <CartAppBar />
      {isModalOpen && <Cart />}
      <Banner />
      <h1>User Page</h1>

      <section>
        <AboutUs />
        <Meals />
      </section>
    </CartProvider>
  );
};

export default Users;
