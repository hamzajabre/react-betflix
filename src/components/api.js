
import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import { MovieContext } from "./context";
import { Carousel } from "react-bootstrap";




const api = "https://www.omdbapi.com/?";
const apiKey = "apikey=90c93d84";

const Main = () => {
  const [name, setName] = useState("");
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState();
  const { setTitreData } = useContext(MovieContext);

  const getInfo = () => {
    fetch(api + apiKey + `&s=${name}` + "&type=movie")
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
          setTotalResults(data.totalResults);
        } else {
          setMovies([]);
          setTotalResults(0);
        }
       
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(e.target.children[0].value);
  };

  useEffect(() => {
    if (name !== "") {
      getInfo();
    }
  }, [name]);

  return (
    <div>
      <Form className="d-flex" onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>
     
    
      {movies && (
        <div className="movies">
          {movies.map((movie) => (
            <div key={movie.imdbID} className="movie">
              <img className="card" src={movie.Poster} alt="" onClick={()=>window.open(movie.Poster)}/>
              <div className="movie-title">
                <p className="para">{movie.Title}</p>
                <p className="para">{movie.Year}</p>
                
              </div>
            </div>
          ))}
          
        </div>
        
      )}
    
       
      

    </div>
  );
};

export default Main;


/*
import React, { useState, useEffect, useContext } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { MovieContext } from "./context";

const api = "https://www.omdbapi.com/?";
const apiKey = "apikey=90c93d84";

const Main = () => {
  const [name, setName] = useState("");
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState();
  const { setTitreData } = useContext(MovieContext);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const getInfo = () => {
    fetch(api + apiKey + `&s=${name}` + "&type=movie")
      .then((response) => response.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
          setTotalResults(data.totalResults);
        } else {
          setMovies([]);
          setTotalResults(0);
        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setName(e.target.children[0].value);
  };

  const handleSelect = (selectedIndex, e) => {
    setSelectedMovie(movies[selectedIndex]);
  };

  useEffect(() => {
    if (name !== "") {
      getInfo();
    }
  }, [name]);

  return (
    <div>
      <Form className="d-flex" onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>

      {movies && (
        <Carousel onSelect={handleSelect}>
          
          {movies.map((movie) => (
            <Carousel.Item key={movie.imdbID}>
              <div className="c">
              <img
                className="d-block w-100"
                src={movie.Poster}
                alt={movie.Title}
              />
              </div>  
            </Carousel.Item>
           
          ))}
           
        </Carousel>
      )}

      {selectedMovie && (
        <div className="movie-details">
          <h2>{selectedMovie.Title}</h2>
          <p>Year: {selectedMovie.Year}</p>
          <p>Type: {selectedMovie.Type}</p>
          <Button onClick={() => setSelectedMovie(null)}>Close</Button>
        </div>
      )}
    </div>
  );
};

export default Main;
*/


