import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import { LOGIN_LOCAL_STORAGE_KEY } from "../constant/constants";

const HomeContext = createContext();

export function HomeContextProvider({ children }) {
  // * Keyword: to store the search term
  // * Myfavourite: to prevent prop drilling
  // * searchIsLoading: other component need the loading or not state
  // * searchResult?

  const localStorageIsUserLoggedIn =
    JSON.parse(localStorage.getItem(LOGIN_LOCAL_STORAGE_KEY)) || false;

  const [isLoggedIn, setIsLoggedIn] = useState(localStorageIsUserLoggedIn);

  const value = {
    isLoggedIn,
    setIsLoggedIn,
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
