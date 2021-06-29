import { useEffect, useState } from 'react';

import { getTrends } from '../../api/fetchMovies';
import MovieList from '../../Components/MovieList';

function HomePage() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrends()
      .then(({ results }) => setMovies(results))
      .catch(error => console.log(error));
  }, []);

  return <>{movies && <MovieList movies={movies} />}</>;
}

export default HomePage;
