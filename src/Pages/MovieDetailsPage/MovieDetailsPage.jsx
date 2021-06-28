import { useState, useEffect, Suspense, lazy } from 'react';
import {
  useParams,
  useRouteMatch,
  useLocation,
  NavLink,
  useHistory,
  Route,
  Switch,
} from 'react-router-dom';

import { getMovieDetail } from '../../api/fetchMovies';
import MovieCard from '../../Components/MovieCard';
import Section from '../../Components/Section';
import Container from '../../Components/Container';

import st from './MovieDetailsPage.module.css';

const Reviews = lazy(() =>
  import('../../Components/Reviews' /* webpackChunkName: "reviews" */),
);
const Cast = lazy(() =>
  import('../../Components/Cast' /* webpackChunkName: "cast" */),
);

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const { url, path } = useRouteMatch();
  const { state } = useLocation();
  const history = useHistory();

  const [movie, setMovie] = useState(null);

  const handleClick = () => {
    history.push(state?.from || '/');
  };

  useEffect(() => {
    getMovieDetail(moviesId).then(setMovie);
  }, [moviesId]);

  return (
    <>
      {movie && (
        <Section>
          <Container>
            <button type="button" onClick={handleClick}>
              Go Bak
            </button>
            <MovieCard movie={movie} />

            <div>
              <NavLink
                to={`${url}/cast`}
                className={st.subViews}
                activeClassName={st.active}
              >
                Cast
              </NavLink>
              <NavLink
                to={`${url}/reviews`}
                className={st.subViews}
                activeClassName={st.active}
              >
                Reviews
              </NavLink>
            </div>
          </Container>
        </Section>
      )}

      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path={`${path}/cast`}>
            {movie && <Cast cast={movie.credits.cast} />}
          </Route>

          <Route path={`${path}/reviews`}>
            {movie && <Reviews reviews={movie.reviews.results} />}
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
