import { useRef } from "react";
import PropTypes from "prop-types";
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

export default function InputFileUpload({ handleFileChange }) {
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
    <>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        onKeyDown={handleUpload}
      >
        Upload file
        <VisuallyHiddenInput
          ref={uploadRef}
          hidden
          type="file"
          accept="image/*"
          required
          name="upload-image-input"
          onChange={handleFileChange}
        />
      </Button>
    </>
  );
}

InputFileUpload.propTypes = {
  handleFileChange: PropTypes.func.isRequired,
};
