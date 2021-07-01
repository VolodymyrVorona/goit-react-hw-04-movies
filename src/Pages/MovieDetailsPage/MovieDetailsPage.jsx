import { useState, useEffect, Suspense, lazy } from 'react';
import {
  useParams,
  useRouteMatch,
  useLocation,
  // NavLink,
  useHistory,
  Route,
  Switch,
} from 'react-router-dom';

import { getMovieDetail } from '../../api/fetchMovies';
import MovieCard from '../../Components/MovieCard';
import Section from '../../Components/Section';
import Container from '../../Components/Container';
import GoBackBtn from '../../Components/GoBackBtn/GoBackBtn';
import SubNav from '../../Components/SubNav';

const Reviews = lazy(() =>
  import('../../Components/Reviews' /* webpackChunkName: "reviews" */),
);
const Cast = lazy(() =>
  import('../../Components/Cast' /* webpackChunkName: "cast" */),
);

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const { path } = useRouteMatch();
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
            <GoBackBtn onBtnClick={handleClick} label={'Go Back'} />
            <MovieCard movie={movie} />
            <SubNav />
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
