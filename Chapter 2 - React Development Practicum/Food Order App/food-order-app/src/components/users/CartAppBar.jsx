import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useCartContext } from "../../store/cart-context";
import { createPortal } from "react-dom";

const CartAppBar = ({ handleClick }) => {
  // * This item is cart item
  const { items: cartItems } = useCartContext();

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const itemsCount = cartItems ? cartItems.length : 0;

  // TODO: remove portal, use floating action button
  return createPortal(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          // place the app bar at the top right corner, dont let it get affected by the drawer
          position: "fixed",
          top: "30px",
          right: "30px",

          maxWidth: { xs: "64px", sm: "208px" },
          borderRadius: "36px",

          cursor: "pointer",
          "&:hover": {
            backgroundColor: "secondary.main",
          },
        }}
        onClick={handleClick}
      >
        <Toolbar>
          {isSmallScreen ? (
            <Badge badgeContent={itemsCount} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          ) : (
            <>
              <ShoppingCartIcon />

              <Typography align="center" sx={{ flexGrow: 1 }}>
                Your Cart
              </Typography>

              {/* TODO: make the chip move if the layout move too */}
              <Chip color="secondary" label={itemsCount} />
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>,
    document.getElementById("cart-root")
  );
};

CartAppBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default CartAppBar;
