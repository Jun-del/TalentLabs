import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import {
  red,
  // blue, green
} from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CardActionArea } from "@mui/material";

const CustomCard = ({
  author,
  date,
  url,
  urlToImage,
  content,
  updateMyFavourite,
}) => {
  const avatarName = author.charAt(0).toUpperCase();

  function getDate(date) {
    const dateTime = new Date(date);
    const year = dateTime.getFullYear();
    const month = String(dateTime.getMonth() + 1).padStart(2, "0");
    const day = String(dateTime.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`; // YYYY-MM-DD
  }

  // * Randomize the card colors (not used because if the card
  // * rerenders, the card changes color again)
  // const colors = [red, blue, green];

  // function getRandomColor(colors) {
  //   const randomShade = Math.floor(Math.random() * 9) * 100; // 0 - 800
  //   const randomColor = colors[Math.floor(Math.random() * colors.length)];

  //   const color = randomColor[randomShade]; // e.g., red[500]

  //   return color;
  // }

  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      variant="outlined"
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {avatarName}
          </Avatar>
        }
        title={author}
        subheader={getDate(date)}
      />

      <CardActionArea href={url} target="_blank">
        <CardMedia
          component="img"
          height="250"
          image={urlToImage}
          alt={content}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => updateMyFavourite(content, url)}
          sx={{ "&:hover": { color: red[400] } }}
        >
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

CustomCard.propTypes = {
  author: PropTypes.string.isRequired, // News source
  date: PropTypes.string.isRequired, // Published date
  url: PropTypes.string, // News url
  urlToImage: PropTypes.string.isRequired, // News image url
  content: PropTypes.string.isRequired, // News title
  updateMyFavourite: PropTypes.func.isRequired,
};

export default CustomCard;
