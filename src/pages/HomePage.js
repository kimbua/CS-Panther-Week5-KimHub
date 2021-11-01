import React, { useEffect, useState } from "react";
import MoviesCarousel from "../components/MoviesCarousel";

const HomePage = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const imgLink = "https://image.tmdb.org/t/p/w500";
  const baseUrl = "https://api.themoviedb.org/3";
  console.log(baseUrl);
  console.log(imgLink);
  console.log(API_KEY);
  const [trending, setTrending] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(
          `${baseUrl}/trending/movie/week?api_key=${API_KEY}`
        );
        let data = await res.json();
        console.log(data);
        setTrending(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(
          `${baseUrl}/movie/now_playing?api_key=${API_KEY}`
        );
        let data = await res.json();
        console.log(data);
        setNowPlaying(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(`${baseUrl}/movie/popular?api_key=${API_KEY}`);
        let data = await res.json();
        console.log(data);
        setPopular(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch(`${baseUrl}/movie/top_rated?api_key=${API_KEY}`);
        let data = await res.json();
        console.log(data);
        setTopRated(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="homepage page">
      <MoviesCarousel
        movies={trending}
        imgLink={imgLink}
        title="Trending Now"
        seeMore="/trending"
      />
      <MoviesCarousel
        movies={nowPlaying}
        imgLink={imgLink}
        title="Now Playing"
        seeMore="/now_playing"
      />
      <MoviesCarousel
        movies={popular}
        imgLink={imgLink}
        title="Popular on KimHub"
        seeMore="popular"
      />
      <MoviesCarousel
        movies={topRated}
        imgLink={imgLink}
        title="Top rated on KimHub"
        seeMore="/top_rated"
      />
    </div>
  );
};

export default HomePage;
