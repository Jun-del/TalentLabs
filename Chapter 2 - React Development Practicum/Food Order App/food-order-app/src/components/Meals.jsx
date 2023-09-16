import { useItemscontext } from "../store/items-context";
import MealsItem from "./MealsItem";
import Grid from "@mui/material/Grid";

const Meals = () => {
  const { itemsData } = useItemscontext();

  return (
    <Grid
      container
      spacing={2}
      padding={4}
      justifyContent={{
        xs: "center",
        md: "flex-start",
      }}
    >
      {itemsData.map((menuItem) => (
        <Grid item key={menuItem.id} xs={12} md={6} lg={4}>
          <MealsItem
            id={menuItem.id}
            name={menuItem.name}
            description={menuItem.description}
            price={menuItem.price}
            image={menuItem.image}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Meals;
