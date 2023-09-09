import "./MyFavouritesPanel.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useThemeContext } from "../../theme/ThemeContextProvider";
import { useHomeContext } from "../../context/HomeContext";

const MyFavouritesPanel = () => {
  const { mode } = useThemeContext();
  const { myFavourites, clearMyFavourites } = useHomeContext();

  return (
    <Grid
      container
      direction="column"
      alignItems="stretch"
      justifyContent="flex-start"
      sx={{ minHeight: "90vh", overflowY: "auto" }}
    >
      <Grid item justifySelf="flex-start" p={2}>
        <Grid container justifyContent="space-around" alignItems="center">
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

      <Grid item>
        <Grid container direction="column" p={1}>
          {myFavourites.map((favourite, index) => (
            <Grid
              item
              key={`${index}-${favourite.url}`}
              xs={12}
              className={
                mode === "dark"
                  ? "favourite-item favourite-item-dark"
                  : "favourite-item favourite-item-light"
              }
              p={1}
            >
              {/* rel="noreferrer" for security purpose */}
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

export default MyFavouritesPanel;
