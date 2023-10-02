import "./Home.css";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Header from "../Header/Header";
import MyFavouritesPanel from "../MyFavouritesPanel/MyFavouritesPanel";
import DisplayResults from "../display-results/DisplayResults";
import { useHomeContext } from "../../context/HomeContext";

const API_KEY = import.meta.env.VITE_API_KEY;
const PAGE_SIZE = import.meta.env.VITE_PAGE_SIZE;
const PAGE_NO = import.meta.env.VITE_PAGE_NO;
const DEVENV = import.meta.env.DEV;

function App() {
  const { keyword, searchResult, setSearchResult } = useHomeContext();

  const [currentPage, setCurrentPage] = useState(Number(PAGE_NO));
  const [searchIsLoading, setSearchIsLoading] = useState(false);

  const fetchInitialSearchResults = useCallback(async () => {
    setCurrentPage(1);

    if (keyword === "") {
      if (searchResult.length === 0) {
        return;
      }
      setSearchResult([]);
      return;
    }

    setSearchIsLoading(true);

    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?apiKey=${API_KEY}&sortBy=publishedAt&q=${keyword}&searchIn=title&pageSize=${PAGE_SIZE}&page=${PAGE_NO}&language=en`,
      );
      const data = response.data;
      const articles = data.articles;

      if (data.totalResults === 0) {
        setSearchResult([]);
      } else {
        setSearchResult(articles);
      }
    } catch (error) {
      if (DEVENV === "false") {
        alert(
          "Requests from the browser are not allowed on the Developer plan from the API, except from localhost.",
        );
      }
      alert(error);
    }
    setSearchIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  useEffect(() => {
    fetchInitialSearchResults();
  }, [fetchInitialSearchResults]);

  function handleLoadMore() {
    setCurrentPage((prev) => prev + 1);
  }

  const fetchNextPage = useCallback(async () => {
    if (currentPage === 1) {
      return;
    }

    setSearchIsLoading(true);

    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?apiKey=${API_KEY}&sortBy=publishedAt&q=${keyword}&searchIn=title&pageSize=${PAGE_SIZE}&page=${currentPage}&language=en`,
      );

      const data = response.data;
      const articles = data.articles;

      if (data.totalResults > 0) {
        setSearchResult((prevSearchResult) => [
          ...prevSearchResult,
          ...articles,
        ]);
      }
    } catch (error) {
      if (DEVENV === "false") {
        alert(
          "Requests from the browser are not allowed on the Developer plan from the API, except from localhost.",
        );
      }
      alert(error);
    }

    setSearchIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    fetchNextPage();
  }, [fetchNextPage]);

  return (
    <Grid container className="main-container" direction="column">
      <Grid
        item
        className="header-container"
        lg={1}
        style={{ maxHeight: "10vh" }}
        borderBottom={2}
      >
        <Header />
      </Grid>

      <Grid item className="content-container" lg={11}>
        <Grid container direction="row" sx={{ height: "100%" }} height="90vh">
          <Grid
            item
            className="left-panel-container"
            borderRight={{ xs: 0, sm: 1, md: 2 }}
            lg={2.5}
            md={3}
            sm={4}
            xs={12}
          >
            <MyFavouritesPanel />
          </Grid>

          <Grid
            item
            className="right-panel-container"
            height="90vh"
            lg={9.5}
            md={9}
            sm={8}
            xs={12}
            p={2}
          >
            <DisplayResults
              handleLoadMore={handleLoadMore}
              searchIsLoading={searchIsLoading}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
