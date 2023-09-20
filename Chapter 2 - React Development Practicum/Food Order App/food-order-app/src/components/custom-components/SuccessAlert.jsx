import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function SuccessAlert({ openSnackbar, setOpenSnackbar }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (openSnackbar) {
      setOpen(true);
    }
  }, [openSnackbar]);

  const handleClose = (_event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Your order has been placed successfully!"
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
          iconMapping={{
            success: <CheckCircleOutlineIcon fontSize="inherit" />,
          }}
        >
          Your order has been placed successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}

SuccessAlert.propTypes = {
  openSnackbar: PropTypes.bool.isRequired,
  setOpenSnackbar: PropTypes.func.isRequired,
};
