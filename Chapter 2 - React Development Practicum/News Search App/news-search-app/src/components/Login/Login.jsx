import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import PasswordTextField from "../custom-components/PasswordTextField";
import ErrorSnackbar from "../custom-components/ErrorSnackbar";

import registeredUsers from "../../data/mock-registered-users";
import {
  LOGIN_LOCAL_STORAGE_KEY,
  USERNAME_LOCAL_STORAGE_KEY,
} from "../../constant/constants";

const Login = () => {
  const navigate = useNavigate();

  const localStorageIsUserLoggedIn =
    JSON.parse(localStorage.getItem(LOGIN_LOCAL_STORAGE_KEY)) || false;

  const [isLoggedIn, setIsLoggedIn] = useState(localStorageIsUserLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home");
    }
  }, [isLoggedIn, navigate]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginError, setIsLoginError] = useState(false); // If wrong username or password
  const [isLoginInProgress, setIsLoginInProgress] = useState(false);

  function handleUsernameChange(e) {
    setIsLoginError(false);
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setIsLoginError(false);
    setPassword(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoginInProgress(true);

    // * Timeout to simulate API call for logging in (loading)
    setTimeout(() => {
      for (let user of registeredUsers) {
        if (user.username === username && user.password === password) {
          setIsLoggedIn(true);

          localStorage.setItem(LOGIN_LOCAL_STORAGE_KEY, JSON.stringify(true));
          localStorage.setItem(
            USERNAME_LOCAL_STORAGE_KEY,
            JSON.stringify(username),
          );

          setIsLoginInProgress(false);
          setIsLoginError(false);

          navigate("/home");
        } else {
          setIsLoginError(true);
          setIsLoginInProgress(false);
          return;
        }
      }
    }, 1500);
  }

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        // style={{ backgroundColor: "lightgray" }}
        style={{ height: "100vh" }}
      >
        {/* Grid item which is a container for both the label and form */}
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          // bgcolor="lightblue"
        >
          {/* Grid for Title */}
          <Grid item bgcolor="lightcoral">
            <h1>Find My News</h1>
          </Grid>

          {/* Grid for form */}
          <Grid item bgcolor="lightcyan">
            <form onSubmit={handleSubmit}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  gap: 2,
                }}
              >
                <TextField
                  required
                  type="text"
                  label="Name"
                  placeholder="John Doe"
                  helperText={isLoginError && "Incorrect username"}
                  error={isLoginError}
                  value={username}
                  onChange={handleUsernameChange}
                />

                <PasswordTextField
                  password={password}
                  handlePasswordChange={handlePasswordChange}
                  isLoginError={isLoginError}
                />

                <Box
                  sx={{
                    width: "100%",
                  }}
                >
                  <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    disabled={isLoginInProgress}
                  >
                    {isLoginInProgress ? "Signing in" : "Sign in"}
                  </Button>
                  {isLoginInProgress && <LinearProgress color="primary" />}
                </Box>
              </Box>
            </form>
          </Grid>
        </Grid>
      </Grid>

      {isLoginError && (
        <ErrorSnackbar
          title={"Login Error"}
          message={"Incorrect Username or Password"}
        />
      )}
    </>
  );
};

export default Login;
