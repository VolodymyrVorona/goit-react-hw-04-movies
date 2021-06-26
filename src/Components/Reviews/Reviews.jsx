import Section from '../Section';
import Container from '../Container';

import st from './Reviews.module.css';

const Reviews = ({ reviews }) => {
  return (
    <Section>
      <Container>
        <ul>
          {reviews.length > 0 ? (
            reviews.map(({ author, content, id }) => (
              <li key={id} className={st.item}>
                <p className={st.author}>Author: {author}</p>

                <p className={st.review}>{content}</p>
              </li>
            ))
          ) : (
            <h2>We don't have any reviews for this movies</h2>
          )}
        </ul>
      </Container>
    </Section>
  );
};

export default Reviews;
