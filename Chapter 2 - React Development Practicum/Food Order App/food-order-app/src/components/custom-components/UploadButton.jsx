import { useRef } from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function InputFileUpload({ handleFileChange, ...props }) {
  const uploadRef = useRef(null);

  // * To allow user to use key to click the uplaod csv button, MUI doesn't support that
  function handleUpload(e) {
    if (e.key === "Enter" || e.key === " ") {
      if (uploadRef.current !== null) {
        uploadRef.current.click();
      }
    }
  }

  return (
    <Box {...props}>
      <Button
        component="label"
        variant="contained"
        startIcon={
          <CloudUploadIcon sx={{ display: { xs: "none", sm: "block" } }} />
        }
        onKeyDown={handleUpload}
      >
        Upload file
        <VisuallyHiddenInput
          ref={uploadRef}
          hidden
          type="file"
          accept="image/*"
          name="upload-image-input"
          onChange={handleFileChange}
        />
      </Button>
    </Box>
  );
}

InputFileUpload.propTypes = {
  handleFileChange: PropTypes.func.isRequired,
};
