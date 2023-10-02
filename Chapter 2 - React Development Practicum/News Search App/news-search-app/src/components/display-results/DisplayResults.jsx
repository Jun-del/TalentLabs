import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import NewsItem from "../NewsItems/NewsItem";
import { useHomeContext } from "../../context/HomeContext";

const DisplayResults = ({ handleLoadMore, searchIsLoading }) => {
  const { keyword, news } = useHomeContext();
  const title = keyword;

  return (
    <>
      {news.length === 0 && !searchIsLoading ? (
        <Grid container height="100%">
          <Grid item xs={12}>
            {keyword === "" ? (
              <Typography variant="h3">Please search for a topic</Typography>
            ) : (
              <Typography variant="h3">
                Sorry, no news found based on your search. Please try again.
              </Typography>
            )}
          </Grid>
        </Grid>
      ) : (
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item alignSelf="start">
            <Typography variant="h6">Search results for {title}:</Typography>
          </Grid>

          <Grid item>
            <Grid
              container
              spacing={{ xs: 1, lg: 2 }}
              columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
              alignItems="stretch"
            >
              {news.map((newsItem, index) => (
                <Grid
                  item
                  xs={2}
                  sm={4}
                  md={4}
                  lg={3}
                  key={`${index}-${newsItem.title}`}
                >
                  <NewsItem news={newsItem} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {news.length !== 0 && (
            <Grid item marginBottom={1}>
              <Button variant="contained" onClick={handleLoadMore}>
                Load More
              </Button>
            </Grid>
          )}

          <Box
            sx={{
              width: "100%",
              visibility: searchIsLoading ? "visible" : "hidden",
            }}
          >
            <LinearProgress />
          </Box>
        </Grid>
      )}
    </>
  );
};

DisplayResults.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
  searchIsLoading: PropTypes.bool.isRequired,
};

export default DisplayResults;
