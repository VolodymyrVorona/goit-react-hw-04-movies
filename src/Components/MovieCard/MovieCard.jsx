import st from './MovieCard.module.css';
import defaultMoviePoster from '../../images/defaultMoviePoster.jpg';

const BookCard = ({ movie }) => {
  const img = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : defaultMoviePoster;

  return (
    <div className={st.wrapper}>
      <div>
        <img src={img} alt={movie.title} width="300" />
      </div>

      <div className={st.contentWrapper}>
        <p className={st.title}>
          {movie.title}
          <span className={st.titleData}>{`(${
            movie.release_date.split('-')[0]
          })`}</span>
        </p>

        <p className={st.popularity}>
          User Score: <span>{`${movie.vote_average * 10}%`}</span>
        </p>

        <p className={st.overview}>Overview</p>

        <p className={st.description}>
          {movie.overview || 'No No description yet. yet.'}
        </p>

        <p className={st.genres}>Genres</p>

        <ul style={{ display: 'flex' }}>
          {movie.genres.map(({ id, name }) => (
            <li key={id} className={st.genresItem}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookCard;
