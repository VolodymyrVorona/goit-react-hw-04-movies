import { Link, useLocation } from 'react-router-dom';
import Section from '../Section';
import Container from '../Container';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <Section>
      <Container>
        <ul>
          {movies &&
            movies.map(({ id, title }) => (
              <li key={id}>
                <Link
                  to={{
                    pathname: `/movies/${id}`,
                    state: { from: location },
                  }}
                >
                  {title}
                </Link>
              </li>
            ))}
        </ul>
      </Container>
    </Section>
  );
};

export default MovieList;
