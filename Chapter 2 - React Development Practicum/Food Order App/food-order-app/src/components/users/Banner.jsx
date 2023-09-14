import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Banner = () => {
  // TODO: placeholder image
  const imageUrl =
    "https://images.unsplash.com/photo-1693875161720-b0c2401c1874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80";

  return (
    <Grid
      container
      spacing={2}
      direction="column"
      sx={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      minHeight="40vh"
    >
      <Grid item xs={12}>
        <Typography color="white" variant="h1">
          Banner
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Banner;
