import "./Home.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Header from "../Header/Header";
import MyFavouritesPanel from "../MyFavouritesPanel/MyFavouritesPanel";
import DisplayResults from "../display-results/DisplayResults";
import { FAVOURITES_LOCAL_STORAGE_KEY } from "../../constant/constants";

// TODO: handle search how and where to implement
const API_KEY = import.meta.env.VITE_API_KEY;
const PAGE_SIZE = import.meta.env.VITE_PAGE_SIZE;
const PAGE_NO = 1;

function App() {
  const localStorageMyFavourite =
    JSON.parse(localStorage.getItem(FAVOURITES_LOCAL_STORAGE_KEY)) || [];

  const [myFavourites, setMyFavourites] = useState(localStorageMyFavourite);
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  function handleSetKeyword(e) {
    setKeyword(e.target.value);
  }

  async function handleSearch(page = PAGE_NO) {
    if (keyword === "") {
      setSearchResult([]);
      return;
    }

    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?apiKey=${API_KEY}&sortBy=publishedAt&q=${keyword}&searchIn=title&pageSize=${PAGE_SIZE}&page=${page}&language=en`,
      );
      const data = response.data;
      const articles = data.articles;

      // TODO: handle no search result
      // if (articles.length < 1) {
      //   console.log("no result found");
      //   return;
      // }

      setSearchResult(articles);
    } catch (error) {
      console.error(error);
    }
  }

  function updateMyFavourite(title, url) {
    const newFavourite = searchResult.find(
      (newsItem) => newsItem.title === title && newsItem.url === url,
    );

    // * Check if the news is already in favourites
    const isAlreadyFavourite = myFavourites.some(
      (favourite) =>
        favourite.title === newFavourite.title &&
        favourite.url === newFavourite.url,
    );

    if (!isAlreadyFavourite) {
      setMyFavourites((prev) => [...prev, newFavourite]);
    }
  }

  useEffect(() => {
    localStorage.setItem(
      FAVOURITES_LOCAL_STORAGE_KEY,
      JSON.stringify(myFavourites),
    );
  }, [myFavourites]);

  function clearMyFavourites() {
    // Clear the favourite state and the local storage
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
      >
        <Header
          keyword={keyword}
          handleSetKeyword={handleSetKeyword}
          handleSearch={handleSearch}
        />
      </Grid>

      <Grid item className="content-container" lg={11}>
        <Grid container direction="row" sx={{ height: "100%" }}>
          <Grid item className="left-panel-container" lg={2.5}>
            <MyFavouritesPanel
              handleSetKeyword={handleSetKeyword}
              myFavourites={myFavourites}
              clearMyFavourites={clearMyFavourites}
            />
          </Grid>

          <Grid item className="right-panel-container" lg={9.5}>
            <DisplayResults
              keyword={keyword}
              updateMyFavourite={updateMyFavourite}
              searchResult={searchResult}
              page={PAGE_NO}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
