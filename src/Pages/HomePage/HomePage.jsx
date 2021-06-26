import { useEffect, useState } from 'react';

import { getTrends } from '../../api/fetchMovies';
import MovieList from '../../Components/MovieList';
import Container from '../../Components/Container';

function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrends()
      .then(({ results }) => setMovies(results))
      .catch(error => console.log(error));
  }, []);

  return <Container>{movies && <MovieList movies={movies} />}</Container>;
}

export default HomePage;
