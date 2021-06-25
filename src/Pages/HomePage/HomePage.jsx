import { useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import { getTrends } from '../../api/fetchMovies';

function HomePage() {
  // const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrends().then(({ results }) => setMovies(results));
  }, []);

  return (
    <div>
      <ul>
        {movies &&
          movies.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default HomePage;

// 9fc3c617e6344b84dcbc8d0c281e8d2c
