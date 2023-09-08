import "./MyFavouritesPanel.css";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MyFavouritesPanel = ({
  handleSetKeyword,
  myFavourites,
  clearMyFavourites,
}) => {
  return (
    <Grid
      container
      direction="column"
      alignItems="stretch"
      justifyContent="flex-start"
      sx={{ minHeight: "90vh", overflowY: "auto" }}
    >
      <Grid item marginTop={1} justifySelf="flex-start">
        <Grid
          container
          spacing={1}
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="p">
              My Favourites: {myFavourites.length}
            </Typography>
          </Grid>

          <Grid item>
            <Button
              variant="contained"
              size="small"
              onClick={clearMyFavourites}
            >
              Clear
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item marginTop={3}>
        <Grid container direction="column">
          {myFavourites.map((favourite) => (
            <Grid
              item
              key={favourite.url}
              xs={12}
              className="favourite-item"
              p={1}
            >
              <a href={favourite.url} target="_blank" rel="noreferrer">
                <Typography variant="subtitle1">{favourite.title}</Typography>
              </a>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

MyFavouritesPanel.propTypes = {
  handleSetKeyword: PropTypes.func.isRequired,
  myFavourites: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      content: PropTypes.string,
      description: PropTypes.string,
      publishedAt: PropTypes.string,
      source: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
      }),
      title: PropTypes.string,
      url: PropTypes.string,
      urlToImage: PropTypes.string,
    }),
  ).isRequired,
  clearMyFavourites: PropTypes.func.isRequired,
};

export default MyFavouritesPanel;
