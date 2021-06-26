import { Link } from 'react-router-dom';

const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies &&
        movies.map(({ id, title }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title}</Link>
          </li>
        ))}
    </ul>
  );
};

export default MovieList;
