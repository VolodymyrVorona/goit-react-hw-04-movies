import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';

import { fetchMoviesByKeyword } from '../../api/fetchMovies';

import Form from '../../Components/Form';
import MovieList from '../../Components/MovieList';
import Section from '../../Components/Section';
import Container from '../../Components/Container';

const MoviesPage = () => {
  const history = useHistory();
  const { query } = queryString.parse(history.location.search);

  const [filmTitle, setFilmTitle] = useState(query || '');
  const [movies, setMovies] = useState(null);

  const handleSubmit = data => {
    setFilmTitle(data);
  };

  useEffect(() => {
    if (filmTitle === '') {
      return;
    }

    history.push({
      search: `query=${filmTitle}`,
    });

    fetchMoviesByKeyword(filmTitle)
      .then(({ results }) => setMovies(results))
      .catch(error => console.log(error));
  }, [filmTitle, history]);

  return (
    <Section>
      <Container>
        <Form onSubmit={handleSubmit} />

        <MovieList movies={movies} />
      </Container>
    </Section>
  );
};

export default MoviesPage;
