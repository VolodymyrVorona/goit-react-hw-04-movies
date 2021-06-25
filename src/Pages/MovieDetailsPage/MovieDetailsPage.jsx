import { useState, useEffect } from 'react';
import { useParams, useRouteMatch, NavLink, Route } from 'react-router-dom';
import { getMovieDetail } from '../../api/fetchMovies';

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const match = useRouteMatch();
  const [movie, setMovie] = useState(null);
  console.log(match);

  useEffect(() => {
    getMovieDetail(moviesId).then(setMovie);
  }, [moviesId]);

  return (
    <>
      {movie && (
        <div style={{ display: 'flex', padding: '20px' }}>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>

          <div>
            <p>
              {movie.title}
              <span>{`(${movie.release_date.split('-')[0]})`}</span>
            </p>

            <p>{movie.overview || 'lsdjf sldkjf lskdjf'}</p>

            <ul style={{ display: 'flex' }}>
              {movie.genres.map(({ id, name }) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div>
        <Route path={`${match.path}/cast`}>
          <NavLink to={`${match.url}/cast`}>Cast</NavLink>
        </Route>

        <Route path={`${match.path}/reviews`}>
          <NavLink to={`${match.url}/reviews`}>Reviews</NavLink>
        </Route>
      </div>
    </>
  );
};

export default MovieDetailsPage;

// release_dates;reviews;append_to_response;credits
