import { useState, useEffect } from 'react';

import { fetchMoviesByKeyword } from '../../api/fetchMovies';

import Form from '../../Components/Form';
import MovieList from '../../Components/MovieList';

const MoviesPage = () => {
  const [filmTitle, setFilmTitle] = useState('');
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    if (filmTitle === '') {
      return;
    }

    fetchMoviesByKeyword(filmTitle)
      .then(({ results }) => setMovies(results))
      .catch(error => console.log(error));
  }, [filmTitle]);

  return (
    <>
      <Form onSubmit={setFilmTitle} />
      <MovieList movies={movies} />
    </>
  );
};

export default MoviesPage;
