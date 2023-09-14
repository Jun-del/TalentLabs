import MealsItem from "./MealsItem";
import Grid from "@mui/material/Grid";

const Meals = () => {
  // TODO: Grid out the food 3 items per row
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <MealsItem />
      </Grid>
    </Grid>
  );
};

export default Meals;
