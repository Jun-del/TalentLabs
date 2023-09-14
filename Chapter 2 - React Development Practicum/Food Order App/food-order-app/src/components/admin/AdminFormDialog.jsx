import PropTypes from "prop-types";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputAdornment from "@mui/material/InputAdornment";
import InputFileUpload from "../custom-components/UploadButton";
import { useItemscontext } from "../../store/items-context";
import { MAX_FILE_SIZE, BASE_URL } from "../../constant";

const API_KEY = import.meta.env.VITE_API_KEY;

const AdminFormDialog = ({ open, handleClose }) => {
  const { addNewItem } = useItemscontext();

  const [foodName, setFoodName] = useState("");
  const [foodDescription, setFoodDescription] = useState("");
  const [foodPrice, setFoodPrice] = useState(0);
  const [foodImage, setFoodImage] = useState({ preview: "", raw: "" });

  // * To handle image upload
  function handleFileChange(e) {
    if (e.target.files === null || e.target.files.length === 0) {
      return;
    }

    const fileObj =
      e.target.files && e.target?.files?.length > 0 && e.target.files[0];

    if (fileObj.size > MAX_FILE_SIZE) {
      // TODO: Something else than alert
      alert(
        `File size exceeds the maximum allowed (${MAX_FILE_SIZE} bytes). Please choose a smaller file.`
      );
      return;
    }

    setFoodImage({
      preview: URL.createObjectURL(fileObj),
      raw: fileObj,
    });

    URL.revokeObjectURL(fileObj);

    // Reset the input
    e.target.value = null;
  }

  // * Store the image online at https://api.imgbb.com/
  async function uploadImage() {
    const formData = new FormData();
    formData.append("image", foodImage.raw);

    try {
      const response = await fetch(`${BASE_URL}?key=${API_KEY}`, {
        method: "POST",
        body: formData,
      });

      // Check if the response status is OK (status code 200)
      if (response.ok) {
        // Parse the response as JSON
        const responseData = await response.json();

        // Check if the 'success' field in the response is true
        if (responseData.success) {
          // Access the image data from the 'data' object
          const data = responseData.data;

          return data;
        } else {
          // Handle the case where the server reports an error (e.g., data.success is false)
          console.error("Image upload failed:", responseData);
        }
      } else {
        // Handle the case where the HTTP request itself failed (e.g., response status is not 200)
        console.error("HTTP error:", response.status);
      }
    } catch (error) {
      // Handle fetch error (e.g., network error)
      console.error("Fetch error:", error);
    }
  }

  function handleAddItemToMenu() {
    // TODO: Handle the price
    // let value = parseFloat(e.target.value.toString(), 2);

    //   if (isNaN(value)) {
    //     value = 0;
    //   }

    //   if (value > MAX_PRICE) value = MAX_PRICE;
    //   if (value < MIN_PRICE) value = MIN_PRICE;

    //   setFoodPrice(value);

    // TODO: update the items in context
    /**
     *  Mock for itemsData = [
     * {
     *  id: string,
     *  foodName: string,
     *  foodDescription: string,
     *  foodPrice: RM
     * }
     * ]
     * */

    const newItem = {
      id: crypto.randomUUID(),
      name: foodName,
      description: foodDescription,
      price: foodPrice,
      image: "",
    };

    uploadImage().then((imageData) => {
      if (imageData) {
        newItem.image = imageData;

        addNewItem(newItem);

        setFoodName("");
        setFoodDescription("");
        setFoodPrice(0);
        setFoodImage({ preview: "", raw: "" });

        handleClose();
      } else {
        // Handle the case where image upload failed
        console.error("Image upload failed.");
      }
    });
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Food Item</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          name="name-input"
          label="Name"
          value={foodName}
          onChange={(e) => {
            setFoodName(e.target.value);
          }}
          type="text"
          fullWidth
          variant="outlined"
          required
        />
        <TextField
          margin="dense"
          id="description"
          name="description-input"
          label="Description"
          value={foodDescription}
          onChange={(e) => {
            setFoodDescription(e.target.value);
          }}
          type="text"
          fullWidth
          variant="outlined"
          required
          multiline
          maxRows={4}
        />
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">RM</InputAdornment>
            ),
          }}
          margin="dense"
          id="price"
          name="price-input"
          label="Price"
          value={foodPrice}
          onChange={(e) => {
            setFoodPrice(e.target.value);
          }}
          type="number"
          fullWidth
          variant="outlined"
          required
        />
        <InputFileUpload handleFileChange={handleFileChange} />
        {foodImage.preview !== "" && (
          <img src={foodImage.preview} alt="uploaded" />
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleAddItemToMenu}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

AdminFormDialog.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default AdminFormDialog;
