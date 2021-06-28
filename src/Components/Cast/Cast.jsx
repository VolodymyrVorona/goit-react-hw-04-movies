import Section from '../Section';
import Container from '../Container';

import defaultActorAvatar from '../../images/defaultActorAvatar.svg';

import st from './Cast.module.css';

const Cast = ({ cast }) => {
  return (
    <>
      {cast && (
        <Section>
          <Container>
            <ul className={st.list}>
              {cast.map(({ name, profile_path, character, id }) => {
                const img = profile_path
                  ? `https://image.tmdb.org/t/p/w200${profile_path}`
                  : defaultActorAvatar;

                return (
                  <li key={id} className={st.item}>
                    <img src={img} alt={name} />

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
