import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Meals from "../Meals";
import AdminFormDialog from "./AdminFormDialog";

const Main = () => {
  const [openAddItemForm, setOpenItemForm] = useState(false);

  const handleClickOpenItemForm = () => {
    setOpenItemForm(true);
  };

  const handleCloseItemForm = (_event, reason) => {
    if (reason === "backdropClick" || reason === "escapeKeyDown") return;

    setOpenItemForm(false);
  };

  return (
    <Box
      sx={{
        flex: 4,
      }}
    >
      <Button variant="contained" onClick={handleClickOpenItemForm}>
        Add Food Item
      </Button>

      <Meals />

      <AdminFormDialog
        open={openAddItemForm}
        handleClose={handleCloseItemForm}
      />
    </Box>
  );
};

export default Main;
