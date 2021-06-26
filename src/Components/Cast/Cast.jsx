import Section from '../Section';
import Container from '../Container';

import st from './Cast.module.css';

const Cast = ({ cast }) => {
  console.log(cast);
  return (
    <>
      {cast && (
        <Section>
          <Container>
            <ul className={st.list}>
              {cast.map(({ name, profile_path, character, id }) => {
                return (
                  <li key={id} className={st.item}>
                    <img
                      src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                      alt=""
                    />

                    <p>{name}</p>

                    <p>Character: {character}</p>
                  </li>
                );
              })}
            </ul>
          </Container>
        </Section>
      )}
    </>
  );
};

export default Cast;
