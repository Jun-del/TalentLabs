import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  LOGIN_LOCAL_STORAGE_KEY,
  FAVOURITES_LOCAL_STORAGE_KEY,
} from "../constant/constants";

const HomeContext = createContext();

export function HomeContextProvider({ children }) {
  const localStorageIsUserLoggedIn =
    JSON.parse(localStorage.getItem(LOGIN_LOCAL_STORAGE_KEY)) || false;
  const localStorageMyFavourite =
    JSON.parse(localStorage.getItem(FAVOURITES_LOCAL_STORAGE_KEY)) || [];

  const [isLoggedIn, setIsLoggedIn] = useState(localStorageIsUserLoggedIn);
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [myFavourites, setMyFavourites] = useState(localStorageMyFavourite);
  const [news, setNews] = useState([]);

  function handleSetKeyword(searchTerm) {
    setKeyword(searchTerm);
  }

  function updateMyFavourite(title, url) {
    const newFavourite = searchResult.find(
      (newsItem) => newsItem.title === title && newsItem.url === url,
    );

    const isAlreadyFavourite = myFavourites.some(
      (favourite) =>
        favourite.title === newFavourite.title &&
        favourite.url === newFavourite.url,
    );

    if (isAlreadyFavourite) {
      setMyFavourites((prev) =>
        prev.filter(
          (prevFavourite) =>
            prevFavourite.title !== newFavourite.title &&
            prevFavourite.url !== newFavourite.url,
        ),
      );
    } else {
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
    if (myFavourites.length === 0) {
      return;
    }

    setMyFavourites([]);
    localStorage.setItem(FAVOURITES_LOCAL_STORAGE_KEY, JSON.stringify([]));
  }

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
