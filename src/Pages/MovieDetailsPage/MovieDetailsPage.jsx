import { useState, useEffect } from 'react';
import {
  useParams,
  useRouteMatch,
  NavLink,
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
  const match = useRouteMatch();

  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetail(moviesId).then(setMovie);
  }, [moviesId]);

  return (
    <>
      {movie && (
        <Section>
          <Container>
            <BookCard movie={movie} />

            <div>
              <NavLink
                to={`${match.url}/cast`}
                className={st.subViews}
                activeClassName={st.active}
              >
                Cast
              </NavLink>
              <NavLink
                to={`${match.url}/reviews`}
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
        <Route path={`${match.path}/cast`}>
          {movie && <Cast cast={movie.credits.cast} />}
        </Route>

        <Route path={`${match.path}/reviews`}>
          {movie && <Reviews reviews={movie.reviews.results} />}
        </Route>
      </Switch>
    </>
  );
};

export default MovieDetailsPage;
