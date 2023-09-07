import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import FaceIcon from "@mui/icons-material/Face";

import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";

import {
  LOGIN_LOCAL_STORAGE_KEY,
  USERNAME_LOCAL_STORAGE_KEY,
} from "../../constant/constants";

// TODO: search
const API_KEY = import.meta.env.VITE_API_KEY;
const PAGE_SIZE = import.meta.env.VITE_PAGE_SIZE;
const PAGE_NO = import.meta.env.VITE_PAGE_NO;

const Header = ({ keyword, handleSetKeyword }) => {
  const localStorageUsername = JSON.parse(
    localStorage.getItem(USERNAME_LOCAL_STORAGE_KEY),
  );
  const localStorageIsUserLoggedIn = JSON.parse(
    localStorage.getItem(LOGIN_LOCAL_STORAGE_KEY),
  );

  const [username, setUsername] = useState(localStorageUsername);
  const [isLoggedIn, setIsLoggedIn] = useState(localStorageIsUserLoggedIn);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  async function handleSearch() {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?apiKey=${API_KEY}&sortBy=publishedAt&q=${keyword}&searchIn=title&pageSize=${PAGE_SIZE}&page=${PAGE_NO}&language=en`,
      );
      const data = response.data;
      const articles = data.articles;
      console.log(articles);
    } catch (error) {
      console.error(error);
    }
  }

  // * If user press enter on search text field
  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setUsername("");

    localStorage.removeItem(USERNAME_LOCAL_STORAGE_KEY);

    // * Either remove the isLoggedIn key or set it to false
    localStorage.removeItem(LOGIN_LOCAL_STORAGE_KEY);
    // localStorage.setItem(LOGIN_LOCAL_STORAGE_KEY, JSON.stringify(false));
  }

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      padding={1}
      bgcolor={"lightyellow"}
    >
      <Grid
        item
        xs={12}
        sm={3}
        md={2}
        alignItems="center"
        justifyContent={{ xs: "center", md: "flex-start" }}
      >
        <Typography variant="h6" component="h1" ml={1}>
          Find My News
        </Typography>
      </Grid>

      <Grid item className="search" xs={12} sm={9} md={6}>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={9} md={10}>
            <TextField
              fullWidth
              type="search"
              value={keyword}
              onChange={handleSetKeyword}
              placeholder="Search for news"
              size="small"
              onKeyDown={handleKeyPress}
            />
          </Grid>

          <Grid item xs={3} md={2}>
            <Button variant="contained" onClick={handleSearch}>
              Search
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className="logout" xs={12} sm={12} md={4}>
        <Grid
          container
          spacing={1}
          justifyContent={{ xs: "center", md: "flex-end" }}
          alignItems="center"
          width="100%"
        >
          <Grid item>
            <DarkModeToggle />
          </Grid>

          <Grid item>
            <Chip icon={<FaceIcon />} label={username} variant="outlined" />
          </Grid>

          <Grid item>
            <Button variant="contained" onClick={handleLogout}>
              Logout
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  keyword: PropTypes.string.isRequired,
  handleSetKeyword: PropTypes.func.isRequired,
};

export default Header;
