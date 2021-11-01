import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";

const MoviesCarousel = ({ movies, imgLink, title, seeMore, setMovieClicked }) => {
  const history = useHistory();
    const handleMovieClick = (element) => {
        setMovieClicked(element);
        history.push(`/movie/${element.id}`);
    };

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
        <div className="d-flex">
          <h5>{title}</h5>
          <Link to={seeMore}>See more</Link>
        </div>
        <Slider {...settings} >
          {movies.map((movie) => (
            <img
              className="movieImg"
              src={`${imgLink}${movie.poster_path}`}
              alt={`${movie.title}`}
              onClick={() => { handleMovieClick(movie); }} key={movie.id}
            />
          ))}
        </Slider>
      </div>
    </Container>
  );
};

export default MoviesCarousel;
