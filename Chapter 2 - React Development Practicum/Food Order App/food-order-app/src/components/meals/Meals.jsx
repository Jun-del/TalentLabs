import PropTypes from "prop-types";
import { useItemscontext } from "../../store/items-context";
import MealsItem from "../meals-item/MealsItem";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Meals = ({ handleEditItem, handleDeleteItem }) => {
  const { itemsData } = useItemscontext();

  return (
    <Grid
      item
      container
      spacing={2}
      columns={{ xs: 4, sm: 8, md: 12 }}
      justifyContent="space-evenly"
      alignItems="center"
    >
      {itemsData.length > 0 ? (
        itemsData.map((menuItem) => (
          <Grid item key={menuItem.id} xs={4} sm={4} md={4} paddingBottom={5}>
            <MealsItem
              id={menuItem.id}
              name={menuItem.name}
              description={menuItem.description}
              price={menuItem.price}
              image={menuItem.image}
              handleEditItem={handleEditItem}
              handleDeleteItem={handleDeleteItem}
            />
          </Grid>
        ))
      ) : (
        <Grid item xs={12} sm={12} md={12}>
          <Typography
            variant="h3"
            textAlign="center"
            paddingTop={5}
            textTransform={"uppercase"}
            fontStyle="italic"
            fontFamily="monospace"
            sx={{
              textDecoration: "underline dotted red;",
            }}
            gutterBottom
          >
            No items in the menu
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

Meals.propTypes = {
  handleEditItem: PropTypes.func,
  handleDeleteItem: PropTypes.func,
};

export default Meals;
