import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  LOGIN_LOCAL_STORAGE_KEY,
  FAVOURITES_LOCAL_STORAGE_KEY,
} from "../constant/constants";

const HomeContext = createContext();

export function HomeContextProvider({ children }) {
  /**
   * Login state
   */
  const localStorageIsUserLoggedIn =
    JSON.parse(localStorage.getItem(LOGIN_LOCAL_STORAGE_KEY)) || false;
  const localStorageMyFavourite =
    JSON.parse(localStorage.getItem(FAVOURITES_LOCAL_STORAGE_KEY)) || [];

  const [isLoggedIn, setIsLoggedIn] = useState(localStorageIsUserLoggedIn);
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [myFavourites, setMyFavourites] = useState(localStorageMyFavourite);
  const [news, setNews] = useState([]);

  /**
   * Keyword
   */
  // * Only update the keyword when the user clicks on the search button to
  // * avoid unnecessary re-render, which will trigger the useEffect hook
  function handleSetKeyword(searchTerm) {
    setKeyword(searchTerm);
  }

  /**
   * MyFavourite
   */
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

    // Remove the news from favourites if it is already favourited
    if (isAlreadyFavourite) {
      setMyFavourites((prev) =>
        prev.filter(
          (prevFavourite) =>
            prevFavourite.title !== newFavourite.title &&
            prevFavourite.url !== newFavourite.url,
        ),
      );
    } else {
      // Add the news to favourites if it is not favourited
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
    // * Early return to avoid unnecessary re-render
    if (myFavourites.length === 0) {
      return;
    }

    setMyFavourites([]);
    localStorage.setItem(FAVOURITES_LOCAL_STORAGE_KEY, JSON.stringify([]));
  }

  /**
   * News
   */
  useEffect(() => {
    setNews(searchResult);
  }, [searchResult]);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
    keyword,
    setKeyword,
    handleSetKeyword,
    myFavourites,
    updateMyFavourite,
    clearMyFavourites,
    searchResult,
    setSearchResult,
    news,
    setNews,
  };

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useHomeContext() {
  return useContext(HomeContext);
}

HomeContextProvider.propTypes = {
  children: PropTypes.func,
}.isRequired;
