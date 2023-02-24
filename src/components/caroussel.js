

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';








function UncontrolledExample() {

  return (
    <Carousel>
      <Carousel.Item>
     <div className='car'>
        <img
          className="d-block w-100"
          src={'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'}
          alt="First slide"
        />
        <img
          className="d-block w-100"
          src={'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg'}
          alt="Second slide"
        />
          <img
          className="d-block w-100"
          src={'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'}
          alt="Second slide"
        />
           <img
          className="d-block w-100"
          src={'https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg'}
          alt="Third slide"
        />
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className='car'>
        <img
          className="d-block w-100"
          src={'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'}
          alt="First slide"
        />
        <img
          className="d-block w-100"
          src={'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg'}
          alt="Second slide"
        />
          <img
          className="d-block w-100"
          src={'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'}
          alt="Second slide"
        />
           <img
          className="d-block w-100"
          src={'https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg'}
          alt="Third slide"
        />
        </div>
       </Carousel.Item> 
       <Carousel.Item>
       <div className='car'>
        <img
          className="d-block w-100"
          src={'https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'}
          alt="First slide"
        />
        <img
          className="d-block w-100"
          src={'https://m.media-amazon.com/images/M/MV5BZDA0OGQxNTItMDZkMC00N2UyLTg3MzMtYTJmNjg3Nzk5MzRiXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg'}
          alt="Second slide"
        />
          <img
          className="d-block w-100"
          src={'https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg'}
          alt="Second slide"
        />
           <img
          className="d-block w-100"
          src={'https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_SX300.jpg'}
          alt="Third slide"
        />
          </div>
       </Carousel.Item> 
       
      
      
    </Carousel>
  );
}

export default UncontrolledExample;

/*

import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import card1 from '../assets/card1.svg';
import card2 from '../assets/card2.svg';
import card3 from '../assets/card3.svg';
import MovieModal from './MovieModal';


 export default function UncontrolledExample() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Exemple de données de films à afficher dans le carrousel
  const movies = [
    {
      id: 1,
      title: 'Inception',
      year: '2010',
      poster: 'https://www.themoviedb.org/t/p/w1280/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg',
      actors: 'Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page',
      genre: 'Action, Adventure, Sci-Fi',
      director: 'Christopher Nolan',
      released: '16 Jul 2010',
      plot: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    },
    {
      id: 2,
      title: 'The Shawshank Redemption',
      year: '1994',
      poster: 'https://www.themoviedb.org/t/p/w1280/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      actors: 'Tim Robbins, Morgan Freeman, Bob Gunton',
      genre: 'Drama',
      director: 'Frank Darabont',
      released: '14 Oct 1994',
      plot: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    },
    {
      id: 3,
      title: 'The Godfather',
      year: '1972',
      poster: 'https://www.themoviedb.org/t/p/w1280/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      actors: 'Marlon Brando, Al Pacino, James Caan',
      genre: 'Crime, Drama',
      director: 'Francis Ford Coppola',
      released: '24 Mar 1972',
      plot: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    },
  ];

  const handleCardClick = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  }

  return (
    <div>
      <Carousel>
        {movies.map((movie) => (
          <Carousel.Item key={movie.id}>
            <div className='car'>
              <img
                className="d-block w-100"
                src={movie.poster}
                alt={movie.title}
                onClick={() => handleCardClick(movie)}
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      {selectedMovie && (
        <MovieModal
          movieInfo={selectedMovie}
          handleClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
*/
