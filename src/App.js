import './App.css';
import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import routes from './routes';
// import HomePage from './Pages/HomePage';
// import MoviesPage from './Pages/MoviesPage';
// import MovieDetailsPage from './Pages/MovieDetailsPage';
import AppBar from './Components/AppBar';

const HomePage = lazy(() => import('./Pages/HomePage'));
const MoviesPage = lazy(() => import('./Pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./Pages/MovieDetailsPage'));

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
