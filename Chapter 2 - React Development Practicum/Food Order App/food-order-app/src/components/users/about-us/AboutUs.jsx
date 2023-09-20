import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import images from "../../../mock-data/mockCarouselImages";
import CustomSwiper from "../../custom-components/swiper/Swiper";

const AboutUs = ({ handleClick }) => {
  return (
    <Grid
      container
      minHeight="50vh"
      sx={{
        padding: { xs: "1.5rem 1rem", sm: "2rem 4rem" },
      }}
      bgcolor="background.paper"
    >
      <Grid item xs={12} marginBottom={2}>
        <Typography
          textAlign="center"
          variant="h6"
          fontSize={{
            xs: "1.5rem",
            sm: "2rem",
          }}
          fontWeight={400}
          textTransform="uppercase"
          textOverflow={{ xs: "ellipsis", sm: "clip" }}
          gutterBottom
        >
          Delicious food for people
        </Typography>
      </Grid>

      <Grid item xs={12} sm={5} paddingRight={1}>
        <Stack spacing={3}>
          <Box>
            <Typography
              variant="body1"
              fontWeight={600}
              textTransform="uppercase"
              fontSize={{ xs: "1rem", sm: "1.1rem" }}
            >
              You&apos;re going to fall in love
            </Typography>

            <Typography variant="subtitle1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas quod quos dolorum
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="body1"
              fontWeight={600}
              textTransform="uppercase"
              fontSize={{ xs: "1rem", sm: "1.1rem" }}
            >
              Food that you never had before
            </Typography>

            <Typography variant="subtitle1" paragraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas quod quos dolorum
            </Typography>
          </Box>

          <Link
            href="#"
            target="_blank"
            rel="noreferrer"
            variant="body1"
            underline="hover"
            aria-label="learn more link that do nothing"
            onClick={(e) => {
              e.preventDefault();
              handleClick();
            }}
          >
            <Typography color="text.secondary" variant="body1">
              LEARN MORE
            </Typography>
          </Link>
        </Stack>
      </Grid>

      <Grid
        item
        xs={12}
        sm={7}
        marginTop={{
          xs: "1rem",
          sm: "0",
        }}
      >
        <CustomSwiper images={images} />
      </Grid>
    </Grid>
  );
};

AboutUs.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default AboutUs;
