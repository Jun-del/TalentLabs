import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useItemscontext } from "../store/items-context";
import { useCartContext } from "../store/cart-context";

const MealsItem = ({ id, name, description, price, image }) => {
  // @ Default: true = User page, false = Admin page
  // TODO: switch page to know if its admin or user panel
  const { switchPage, removeItem: removeMenuItem } = useItemscontext();

  const { addItem } = useCartContext();

  function addItemToCart() {
    const cartItemToAdd = {
      id,
      name,
      price,
      quantity: 1,
    };

    addItem(cartItemToAdd);
  }

  function removeItemFromMenu(id) {
    removeMenuItem(id);

    // TODO: notifies cart since the provider is different and the cart provider is not in the same tree
  }

  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
      <CardMedia sx={{ height: 250 }} image={image.display_url} title={name} />
      <CardContent sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="h6">RM {price}</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {switchPage ? (
          // * If user, add to cart
          <Button variant="outlined" onClick={addItemToCart}>
            Add to Cart
          </Button>
        ) : (
          // * If admin, allow deletion of catalog items
          <Button variant="outlined" onClick={() => removeItemFromMenu(id)}>
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

MealsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  image: PropTypes.object.isRequired,
};

export default MealsItem;
