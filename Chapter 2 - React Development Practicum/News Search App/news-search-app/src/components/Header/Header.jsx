import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import FaceIcon from "@mui/icons-material/Face";
import DarkModeToggle from "../custom-components/DarkModeToggle";

import {
  LOGIN_LOCAL_STORAGE_KEY,
  USERNAME_LOCAL_STORAGE_KEY,
} from "../../constant/constants";
import { useHomeContext } from "../../context/HomeContext";

const Header = () => {
  const localStorageUsername = JSON.parse(
    localStorage.getItem(USERNAME_LOCAL_STORAGE_KEY),
  );

  const {
    isLoggedIn,
    setIsLoggedIn,
    handleSetKeyword,
    setKeyword,
    setNews,
    setSearchResult,
  } = useHomeContext();
  const [searchTerm, setSearchTerm] = useState("");
  const [username, setUsername] = useState(localStorageUsername);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSetKeyword(searchTerm);
    }
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setUsername("");
    setSearchResult([]);
    setKeyword("");
    setNews("");

    localStorage.removeItem(USERNAME_LOCAL_STORAGE_KEY);
    localStorage.removeItem(LOGIN_LOCAL_STORAGE_KEY);
  }

  return (
    <Grid
      container
      alignItems="center"
      justifyContent={{ xs: "space-around" }}
      height="10vh"
      width="100%"
    >
      <Grid item xs={2} sm={2} md={2} justifySelf="flex-start" width="100%">
        <Typography
          variant="h6"
          component="h1"
          ml={1}
          textOverflow="ellipsis"
          sx={{ userSelect: "none" }}
          noWrap
          color="text.secondary"
        >
          Find My News
        </Typography>
      </Grid>

      <Grid item className="search" xs={10} sm={5} md={6}>
        <Grid container alignItems="center" spacing={1}>
          <Grid item xs={8} md={10}>
            <TextField
              autoFocus
              fullWidth
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for news"
              size="small"
              onKeyDown={handleKeyPress}
              color="primary"
            />
          </Grid>

          <Grid item xs={4} md={2}>
            <Button
              variant="contained"
              onClick={() => handleSetKeyword(searchTerm)}
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid item className="logout" xs={12} sm={5} md={4}>
        <Grid
          container
          gap={1}
          justifyContent={{ xs: "center", md: "flex-end" }}
          alignItems="center"
          width="100%"
        >
          <Grid item>
            <DarkModeToggle />
          </Grid>

          <Grid item>
            <Chip
              icon={<FaceIcon />}
              label={username}
              variant="filled"
              color="primary"
            />
          </Grid>

          <Grid item marginRight={2}>
            <Button variant="contained" onClick={handleLogout}>
              Logout
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
