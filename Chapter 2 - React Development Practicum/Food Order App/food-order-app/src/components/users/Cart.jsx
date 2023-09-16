import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCartContext } from "../../store/cart-context";
import { ORDER_ITEMS_LOCAL_STORAGE_KEY } from "../../constant";

const Cart = ({ open, handleClose }) => {
  const {
    items: cartItems,
    totalAmount,
    removeItem,
    incrementItem,
    decrementItem,
  } = useCartContext();

  function handleOrderClick() {
    localStorage.setItem(
      ORDER_ITEMS_LOCAL_STORAGE_KEY,
      JSON.stringify(cartItems)
    );

    // TODO: display a receipt
    alert(`Your order is: ${JSON.stringify(cartItems, null, 2)}`);

    handleClose();
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      disableEscapeKeyDown={true}
      PaperProps={{ sx: { borderRadius: "20px" } }}
      fullWidth
    >
      <DialogTitle>Food Cart</DialogTitle>
      <DialogContent>
        <Box>
          {cartItems.length > 0 ? (
            <ul
              style={{
                listStyleType: "none",
                padding: 0,
              }}
            >
              {cartItems.map((item) => (
                <li key={item.id}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Box>
                      {/* TODO: something about the style */}
                      <Typography>{item.name}</Typography>
                      <Typography>RM {item.price}</Typography>
                    </Box>

                    <Box>
                      <Stack direction="row">
                        <IconButton
                          aria-label="decrement menu item amount by 1"
                          onClick={() => {
                            if (item.quantity > 1) {
                              decrementItem(item.id);
                            }
                          }}
                        >
                          <RemoveIcon />
                        </IconButton>

                        <IconButton
                          aria-label="add menu item amount by 1"
                          onClick={() => {
                            incrementItem(item.id);
                          }}
                        >
                          <AddIcon />
                        </IconButton>

                        <IconButton
                          aria-label="remove item from cart"
                          onClick={() => removeItem(item.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Stack>
                    </Box>
                  </Box>
                </li>
              ))}
            </ul>
          ) : (
            "No items in cart"
          )}
        </Box>

        <Divider />

        <Box>Total Price: RM {totalAmount}</Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" onClick={handleOrderClick}>
          Order
        </Button>
      </DialogActions>
    </Dialog>
  );
};

Cart.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default Cart;
