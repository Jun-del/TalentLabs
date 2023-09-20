import { useRef, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AboutUs from "../components/users/about-us/AboutUs";
import CartAppBar from "../components/users/cart-appbar/CartAppBar";
import Cart from "../components/users/cart/Cart";
import Banner from "../components/users/banner/Banner";
import Meals from "../components/meals/Meals";
import SuccessAlert from "../components/custom-components/SuccessAlert";
import CartProvider from "../store/CartProvider";

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const sectionRef = useRef(null);
  const menuItemsRef = useRef(null);

  function scrollToSection() {
    if (!sectionRef.current) return;
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function scrollToMenuItems() {
    if (!menuItemsRef.current) return;
    menuItemsRef.current.scrollIntoView({ behavior: "smooth" });
  }

  function handleCartOpen() {
    setIsModalOpen(true);
  }

  function handleCartClose(_event, reason) {
    if (reason === "escapeKeyDown" || reason === "backdropClick") {
      return;
    }

    setIsModalOpen(false);
  }

  function handleSnackbarOpen() {
    setOpenSnackbar(true);
  }

  return (
    <CartProvider>
      <Box>
        <CartAppBar handleClick={handleCartOpen} />

        <Cart
          open={isModalOpen}
          handleClose={handleCartClose}
          handleSnackbarOpen={handleSnackbarOpen}
        />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Banner handleClick={scrollToSection} />

          <section ref={sectionRef}>
            <AboutUs handleClick={scrollToMenuItems} />

            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="space-evenly"
              paddingY={{
                xs: "1.5rem",
                sm: "2rem",
              }}
              spacing={{
                xs: 2,
                sm: 4,
              }}
              ref={menuItemsRef}
            >
              <Grid item>
                <Typography
                  textTransform="uppercase"
                  variant="h5"
                  fontSize={{
                    xs: "1.5rem",
                    sm: "2rem",
                  }}
                >
                  Available Foods
                </Typography>
              </Grid>

              <Meals />
            </Grid>
          </section>
        </Box>
      </Box>

      <SuccessAlert
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
      />
    </CartProvider>
  );
};

export default Users;
