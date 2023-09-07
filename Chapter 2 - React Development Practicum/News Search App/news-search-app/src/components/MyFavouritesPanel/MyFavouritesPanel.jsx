import React from "react";
import PropTypes from "prop-types";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";

const MyFavouritesPanel = ({
  handleSetKeyword,
  myFavourites,
  clearMyFavourites,
}) => {
  return <div>MyFavouritesPanel</div>;
};

MyFavouritesPanel.propTypes = {
  handleSetKeyword: PropTypes.func.isRequired,
  myFavourites: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      content: PropTypes.string,
      description: PropTypes.string,
      publishedAt: PropTypes.string,
      source: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
      }),
      title: PropTypes.string,
      url: PropTypes.string,
      urlToImage: PropTypes.string,
    }),
  ).isRequired,
  clearMyFavourites: PropTypes.func.isRequired,
};

export default MyFavouritesPanel;
