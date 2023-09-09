import { useState } from "react";
import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

const PasswordTextField = (props) => {
  const {
    password,
    handlePasswordChange,
    isLoginError,
    passwordVisible,
    ...otherProps
  } = props;

  const [showPassword, setShowPassword] = useState(passwordVisible);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TextField
      {...otherProps}
      fullWidth
      required
      type={showPassword ? "text" : "password"}
      label="Password"
      placeholder="**********"
      helperText={isLoginError && "Incorrect password"}
      error={isLoginError}
      value={password}
      onChange={handlePasswordChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleShowPassword}
              onMouseDown={handleShowPassword}
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

PasswordTextField.propTypes = {
  password: PropTypes.string.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  isLoginError: PropTypes.bool.isRequired,
  passwordVisible: PropTypes.bool,
};

PasswordTextField.defaultProps = {
  passwordVisible: false,
};

export default PasswordTextField;
