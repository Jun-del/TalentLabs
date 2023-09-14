import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useItemscontext } from "../store/items-context";
import { useCartContext } from "../store/cart-context";

const MealsItem = () => {
  // TODO: Receive props and map them, use the id to delete item

  // @ Default: true = User page, false = Admin page
  // TODO: switch page to know if its admin or user panel
  const { switchPage, removeItem } = useItemscontext();

  // TODO: add to cart thingy
  const { addItem } = useCartContext();

  return (
    <Card sx={{ maxWidth: 345, borderRadius: 3 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={`https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80`}
        title={"food name"}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`Food name`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`Food description`}
        </Typography>
      </CardContent>
      <CardActions>
        {switchPage ? (
          <Button variant="outlined" onClick={() => addItem()}>
            Add to Cart
          </Button>
        ) : (
          <Button variant="outlined" onClick={() => removeItem()}>
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default MealsItem;
