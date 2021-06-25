import './App.css';
import { Route, Switch } from 'react-router-dom';

import HomePage from './Pages/HomePage';
import MoviesPage from './Pages/MoviesPage';
import MovieDetailsPage from './Pages/MovieDetailsPage';

import AppBar from './Components/AppBar';

function App() {
  return (
    <div className="App">
      <AppBar />

      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/movies/:moviesId">
          <MovieDetailsPage />
        </Route>

        <Route path="/movies">
          <MoviesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
