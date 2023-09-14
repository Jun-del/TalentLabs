import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Badge from "@mui/material/Badge";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useCartContext } from "../../store/cart-context";

const CartAppBar = () => {
  const { items } = useCartContext();

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const itemsCount = items ? items.length : 0;

  return (
    <AppBar
      sx={{
        maxWidth: { xs: "64px", sm: "208px" },
        borderRadius: "36px",
        top: "10px",
        right: "10px",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "secondary.main",
        },
      }}
      onClick={() => console.log("hello")}
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

            <Chip color="secondary" label={itemsCount} />
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default CartAppBar;
