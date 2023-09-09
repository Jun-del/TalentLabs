import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import PasswordTextField from "../custom-components/PasswordTextField";
import ErrorSnackbar from "../custom-components/ErrorSnackbar";

import registeredUsers from "../../mock-data/mock-registered-users";
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
      const user = registeredUsers.find(
        (user) => user.username === username && user.password === password,
      );

      if (user) {
        setIsLoggedIn(true);

        localStorage.setItem(LOGIN_LOCAL_STORAGE_KEY, JSON.stringify(true));
        localStorage.setItem(
          USERNAME_LOCAL_STORAGE_KEY,
          JSON.stringify(username),
        );

        setIsLoginError(false);
        navigate("/home");
      } else {
        setIsLoginError(true);
      }

      setIsLoginInProgress(false);
    }, 1000);
  }

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh", width: "100%" }}
      >
        {/* Grid item which is a container for both the label and form */}
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          {/* Grid for Title */}
          <Grid item p={1} marginBottom={2}>
            <Typography
              variant="h1"
              textAlign="center"
              sx={{ userSelect: "none" }}
              color={"text.secondary"}
            >
              Find My News
            </Typography>
          </Grid>

          {/* Grid for form */}
          <Grid item width={{ sm: "50%", lg: "35%" }}>
            <form onSubmit={handleSubmit}>
              <Grid container direction="column" flexWrap="wrap" gap={2}>
                <Grid item>
                  <TextField
                    autoFocus
                    fullWidth
                    required
                    type="text"
                    label="Name"
                    placeholder="John Doe"
                    helperText={isLoginError && "Incorrect username"}
                    error={isLoginError}
                    value={username}
                    onChange={handleUsernameChange}
                    color="primary"
                  />
                </Grid>

                <Grid item>
                  <PasswordTextField
                    password={password}
                    handlePasswordChange={handlePasswordChange}
                    isLoginError={isLoginError}
                    color="primary"
                  />
                </Grid>

                <Grid item>
                  <Button
                    fullWidth
                    variant="contained"
                    type="submit"
                    disabled={isLoginInProgress}
                  >
                    {isLoginInProgress ? "Signing in" : "Sign in"}
                  </Button>
                  {isLoginInProgress && <LinearProgress color="primary" />}
                </Grid>
              </Grid>
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
