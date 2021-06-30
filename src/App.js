import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './routes';

import AppBar from './Components/AppBar';

const HomePage = lazy(() =>
  import('./Pages/HomePage' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./Pages/MoviesPage' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    './Pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */
  ),
);

function App() {
  return (
    <>
      <AppBar />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path={routes.home}>
            <HomePage />
          </Route>

          <Route path={routes.movieDetails}>
            <MovieDetailsPage />
          </Route>

          <Route path={routes.movies}>
            <MoviesPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
