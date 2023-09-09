import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Header from "../Header/Header";
import MyFavouritesPanel from "../MyFavouritesPanel/MyFavouritesPanel";
import DisplayResults from "../display-results/DisplayResults";
import { FAVOURITES_LOCAL_STORAGE_KEY } from "../../constant/constants";

const API_KEY = import.meta.env.VITE_API_KEY;
const PAGE_SIZE = import.meta.env.VITE_PAGE_SIZE;
const PAGE_NO = import.meta.env.VITE_PAGE_NO;
const DEVENV = import.meta.env.DEV;

function App() {
  const localStorageMyFavourite =
    JSON.parse(localStorage.getItem(FAVOURITES_LOCAL_STORAGE_KEY)) || [];

  const [myFavourites, setMyFavourites] = useState(localStorageMyFavourite);
  const [keyword, setKeyword] = useState("");
  const [currentPage, setCurrentPage] = useState(Number(PAGE_NO));
  const [searchResult, setSearchResult] = useState([]);
  const [searchIsLoading, setSearchIsLoading] = useState(false);

  // * Only update the keyword when the user clicks on the search button to
  // * avoid unnecessary re-render, which will trigger the useEffect hook
  function handleSetKeyword(searchTerm) {
    setKeyword(searchTerm);
  }

  useEffect(() => {
    // * Fetch initial search results (search button is clicked) (IIFE)
    (async function () {
      // Reset the current page to 1 when the user search for a new keyword
      setCurrentPage(Number(PAGE_NO));

      // If keyword is empty, clear the search result
      if (keyword === "") {
        // If keyword and search result is empty, do nothing
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
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword]);

  function handleLoadMore() {
    setCurrentPage((prev) => prev + 1);
  }

  useEffect(() => {
    if (currentPage === 1) {
      return;
    }

    // * Fetch additional search results (load more button is clicked)
    (async function () {
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
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  function updateMyFavourite(title, url) {
    const newFavourite = searchResult.find(
      (newsItem) => newsItem.title === title && newsItem.url === url,
    );

    // * Check if the news is already in favourites to avoid duplicates
    const isAlreadyFavourite = myFavourites.some(
      (favourite) =>
        favourite.title === newFavourite.title &&
        favourite.url === newFavourite.url,
    );

    if (isAlreadyFavourite) {
      return;
    }

    setMyFavourites((prev) => [...prev, newFavourite]);
  }

  useEffect(() => {
    localStorage.setItem(
      FAVOURITES_LOCAL_STORAGE_KEY,
      JSON.stringify(myFavourites),
    );
  }, [myFavourites]);

  function clearMyFavourites() {
    // * Early return to avoid unnecessary re-render
    if (myFavourites.length === 0) {
      return;
    }

    setMyFavourites([]);
    localStorage.setItem(FAVOURITES_LOCAL_STORAGE_KEY, JSON.stringify([]));
  }

  return (
    <Grid container className="main-container" direction="column">
      <Grid
        item
        className="header-container"
        lg={1}
        style={{ maxHeight: "10vh" }}
        borderBottom={2}
      >
        <Header handleSetKeyword={handleSetKeyword} />
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
            <MyFavouritesPanel
              myFavourites={myFavourites}
              clearMyFavourites={clearMyFavourites}
            />
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
              keyword={keyword}
              updateMyFavourite={updateMyFavourite}
              searchResult={searchResult}
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
