import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useItemscontext } from "../../../store/items-context";
import { useCartContext } from "../../../store/cart-context";

export default function DeleteDialog({
  open,
  setOpen,
  itemId,
  setDeleteItemId,
}) {
  const { removeItem: removeMenuItem, itemsData } = useItemscontext();
  const { removeItem: removeCartItem } = useCartContext();

  const title = itemsData.find((item) => item.id === itemId)?.name || itemId;

  const handleClose = (_event, reason) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") return;
    setDeleteItemId(null);
    setOpen(false);
  };

  const handleDelete = () => {
    removeCartItem(itemId);
    removeMenuItem(itemId);

    setDeleteItemId(null);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby={`delete-menu-item-${title}`}
        aria-describedby={`confirmation-dialog-to-delete-${title}`}
      >
        <DialogTitle id={`delete-menu-item-${title}`}>
          {`Are you sure you want to delete ${title}?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id={`confirmation-dialog-to-delete-${title}`}>
            This action cannot be undone. This will permanently delete {title}{" "}
            from the menu and user&apos;s cart.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            variant="outlined"
            color="warning"
            onClick={handleDelete}
            autoFocus
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

DeleteDialog.propTypes = {
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  itemId: PropTypes.string,
  setDeleteItemId: PropTypes.func,
};
