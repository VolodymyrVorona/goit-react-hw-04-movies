import { useState, useEffect } from 'react';
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
import BookCard from '../../Components/BookCard';
import Cast from '../../Components/Cast';
import Reviews from '../../Components/Reviews';
import Section from '../../Components/Section';
import Container from '../../Components/Container';

import st from './MovieDetailsPage.module.css';

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
            <BookCard movie={movie} />

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

      <Switch>
        <Route path={`${path}/cast`}>
          {movie && <Cast cast={movie.credits.cast} />}
        </Route>

        <Route path={`${path}/reviews`}>
          {movie && <Reviews reviews={movie.reviews.results} />}
        </Route>
      </Switch>
    </>
  );
};

export default MovieDetailsPage;
