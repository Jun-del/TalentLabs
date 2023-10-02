import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import "./CustomSwiper.css";
import "swiper/css";
import "swiper/css/pagination";

const CustomSwiper = ({ images }) => {
  return (
    <Swiper
      modules={[Pagination]}
      spaceBetween={50}
      pagination={{ clickable: true, el: ".swiper-style" }}
      slidesPerView={3}
      breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 2,
        },
        750: {
          slidesPerView: 1,
          spaceBetween: 1,
        },
        900: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1350: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
    >
      {images.map((image, index) => {
        return (
          <SwiperSlide key={`${index}-${image}`}>
            <Box
              component="img"
              sx={{
                height: 300,
                width: 350,
                maxHeight: { xs: 233, md: 270 },
                maxWidth: { xs: 350, md: 250 },
                objectFit: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                border: "2px solid black",
                borderRadius: "15%",
                "@media (max-width: 750px)": {
                  height: 150,
                  width: 175,
                  maxHeight: { xs: 150, md: 175 },
                  maxWidth: { xs: 175, md: 125 },
                },
              }}
              alt={`image ${index} ${image.title} of carousel`}
              src={image.url}
            />
          </SwiperSlide>
        );
      })}
      <Box className="swiper-style"></Box>
    </Swiper>
  );
};

export default CustomSwiper;

CustomSwiper.propTypes = {
  images: PropTypes.array.isRequired,
};
