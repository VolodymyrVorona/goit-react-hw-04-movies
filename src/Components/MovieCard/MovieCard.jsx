import st from './MovieCard.module.css';

const BookCard = ({ movie }) => {
  return (
    <div className={st.wrapper}>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
        />
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
