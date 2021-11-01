import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Image } from "react-bootstrap";
import './Detail.css'
import Youtube from "./Youtube";


const API_KEY = process.env.REACT_APP_API_KEY;

const MoviePage = () => {
    const { id } = useParams();
    const [movieDetail, setMovieDetail] = useState({});

    useEffect(() => {
        const fetchMovieDetail = async () => {
            const resp = await fetch(
                `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
            );
            const json = await resp.json();
            setMovieDetail(json);


        };
        fetchMovieDetail();
    }, [id]);

    return (
        <>
        <div className="moviePage" >
            <div className="moviePage-container" >
                <div className="moviePage-main">
                    <div className="row">
                        <div className="col-6">
                            <Image src={"https://image.tmdb.org/t/p/w500/" + movieDetail.poster_path} rounded/>
                        </div>
                        <div className="col-6 right">
                            <h4>{movieDetail.title}</h4>
                            <p>
                                Genres:{" "}
                                {movieDetail.genres?.map((g) => {
                                    return (
                                        <Button variant={"light"} className="ml-2 button__btn" key={g.key}
                                            style={{ margin: '10px 5px' }}

                                        >
                                            {g.name}
                                        </Button>
                                    );
                                })}
                            </p>
                            <p>
                                Ratings: {movieDetail.vote_average}
                            </p>
                            <p>
                                {movieDetail.production_companies?.map((p) => {
                                    return (
                                        <Image
                                            key={p.id}
                                            className="mx-3"
                                            style={{ width: "90px", height: "auto" }}
                                            src={`https://image.tmdb.org/t/p/w500/${p.logo_path || "p3ZZzdpYlf6PEz5HR9t5SJQT5dO.png"}`}
                                        />
                                    );
                                })}
                            </p>
                            <strong>
                                <p>{movieDetail.overview}</p>
                            </strong>
                            <p>Runtime: {movieDetail.runtime} minutes</p>
                            <Button variant={"outline-success"} href={movieDetail.homepage}>To Movie Page</Button>
                            <hr className="solid"></hr>
                        </div>
                    </div>
                </div>
            </div>
            <h4 style={{textAlign:"center" , marginBottom:"5vh"}}>Watch Trailer</h4>
            <div className="youtube-container">
                <Youtube movieDetail={movieDetail} />
            </div>
        </div>
        </>
    );
};
    
export default MoviePage;