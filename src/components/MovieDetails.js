import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const api = "https://www.omdbapi.com/?";
const apiKey = "apikey=90c93d84";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    fetch(api + apiKey + `&i=${imdbID}` + "&plot=full")
      .then((response) => response.json())
      .then((data) => {
        setMovieDetails(data);
      });
  }, [imdbID]);

  return (
    <div>
      <h1>{movieDetails.Title}</h1>
      <img src={movieDetails.Poster} alt={movieDetails.Title} />
      <p>{movieDetails.Plot}</p>
    </div>
  );
};

export default MovieDetails;
