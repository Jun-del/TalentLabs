import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
// Photo by <a href="https://unsplash.com/@1ncreased?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Lidye</a> on <a href="https://unsplash.com/photos/1Shk_PkNkNw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
import bannerImage from "../../../assets/banner.jpg";

const Banner = ({ handleClick }) => {
  // const imageUrl =
  //   "https://images.unsplash.com/photo-1693875161720-b0c2401c1874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1099&q=80";

  return (
    <Box
      sx={{
        // backgroundImage: `url(${imageUrl})`,
        backgroundImage: `url(${bannerImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        minHeight="50vh"
        sx={{ textAlign: "center" }}
      >
        <Grid item xs={12} py={2}>
          <Typography
            color="white"
            variant="h2"
            textAlign="center"
            sx={{
              fontWeight: 400,
              letterSpacing: 10,
              fontSize: { xs: "3rem", sm: "5rem" },
              wordBreak: "break-word",
              "@media (max-width: 360px)": {
                fontSize: "2rem",
              },
            }}
          >
            FOODYNERD
          </Typography>
          <Typography
            color="white"
            variant="h5"
            textAlign="center"
            py={1}
            sx={{
              fontWeight: 300,
              letterSpacing: 5,
              fontSize: { xs: "1.5rem", sm: "3rem" },
              "@media (max-width: 300px)": {
                fontSize: "1rem",
              },
            }}
          >
            IS WHERE LIFE BEGINS
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            sx={{
              padding: "0.5rem 2rem",
              borderRadius: 8,
            }}
            onClick={handleClick}
            size="large"
          >
            Discover
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

Banner.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Banner;
