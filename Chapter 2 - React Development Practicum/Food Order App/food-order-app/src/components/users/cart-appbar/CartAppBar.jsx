import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
import Fab from "@mui/material/Fab";
import Badge from "@mui/material/Badge";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useCartContext } from "../../../store/cart-context";

const CartAppBar = ({ handleClick }) => {
  const { items: cartItems } = useCartContext();

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const itemsCount = cartItems ? cartItems.length : 0;

  return (
    <Fab
      variant="extended"
      aria-label="food-cart"
      onClick={handleClick}
      sx={{
        position: "fixed",
        top: "30px",
        right: "30px",
      }}
      color="primary"
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 1,
        }}
      >
        {isSmallScreen ? (
          <Badge badgeContent={itemsCount} color="info">
            <ShoppingCartIcon />
          </Badge>
        ) : (
          <>
            <ShoppingCartIcon sx={{ mr: 1 }} color="secondary" />
            <Typography align="center" sx={{ flexGrow: 1, mr: 1.5 }}>
              Your Cart
            </Typography>

            <Chip color="secondary" label={itemsCount} />
          </>
        )}
      </Box>
    </Fab>
  );
};

// * Using app bar mui component
// const CartAppBar = ({ handleClick }) => {
//   // * This item is cart item
//   const { items: cartItems } = useCartContext();

//   const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

//   const itemsCount = cartItems ? cartItems.length : 0;

//   // TODO: remove portal, use floating action button
//   return createPortal(
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar
//         sx={{
//           // place the app bar at the top right corner, dont let it get affected by the drawer
//           position: "fixed",
//           top: "30px",
//           right: "30px",

//           maxWidth: { xs: "64px", sm: "208px" },
//           borderRadius: "36px",

//           cursor: "pointer",
//           "&:hover": {
//             backgroundColor: "secondary.main",
//           },
//         }}
//         onClick={handleClick}
//       >
//         <Toolbar>
//           {isSmallScreen ? (
//             <Badge badgeContent={itemsCount} color="secondary">
//               <ShoppingCartIcon />
//             </Badge>
//           ) : (
//             <>
//               <ShoppingCartIcon />

//               <Typography align="center" sx={{ flexGrow: 1 }}>
//                 Your Cart
//               </Typography>

//               <Chip color="secondary" label={itemsCount} />
//             </>
//           )}
//         </Toolbar>
//       </AppBar>
//     </Box>,
//     document.getElementById("cart-root")
//   );
// };

CartAppBar.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default CartAppBar;
