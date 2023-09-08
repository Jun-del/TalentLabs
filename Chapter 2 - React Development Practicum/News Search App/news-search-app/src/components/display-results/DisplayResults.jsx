import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import NewsItem from "../NewsItems/NewsItem";

const DisplayResults = ({ keyword, updateMyFavourite, searchResult, page }) => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function handleLoadMore() {
    page += 1;
  }

  useEffect(() => {
    setNews(searchResult);
  }, [searchResult]);

  return (
    <>
      {news.length < 1 ? (
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3">Please search for a topic</Typography>
          </Grid>
        </Grid>
      ) : (
        // Grid for display result and button
        <Grid
          container
          spacing={2}
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid item>
            {/* Grid for display results card */}
            <Grid
              container
              spacing={{ xs: 1, lg: 2 }}
              columns={{ xs: 4, sm: 8, md: 12, lg: 12 }}
              alignItems="stretch"
            >
              {news.map((newsItem) => (
                <Grid item xs={2} sm={4} md={4} lg={3} key={newsItem.title}>
                  <NewsItem
                    news={newsItem}
                    updateMyFavourite={updateMyFavourite}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid item>
            <Button variant="contained" onClick={handleLoadMore}>
              Load More
            </Button>
          </Grid>
        </Grid>
      )}

      {isLoading && (
        <Box sx={{ width: "100%", marginTop: "1rem" }}>
          <LinearProgress />
        </Box>
      )}
    </>
  );
};

DisplayResults.propTypes = {
  keyword: PropTypes.string.isRequired,
  updateMyFavourite: PropTypes.func.isRequired,
  searchResult: PropTypes.arrayOf(
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
  page: PropTypes.number.isRequired,
};

export default DisplayResults;
