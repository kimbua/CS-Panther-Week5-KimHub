import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const MoviesCarousel = ({ movies, imgLink, title, seeMore }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };

  return (
    <Container fluid className="carousel-container">
      <div className="content">
        <div className="d-flexx">
          <h5>{title}</h5>
          <Link to={seeMore}>See more</Link>
        </div>
        <Slider {...settings}>
          {movies.map((movie) => (
            <img
              className="movieImg"
              src={`${imgLink}${movie.poster_path}`}
              alt={`${movie.title}`}
            />
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default MoviesCarousel;
