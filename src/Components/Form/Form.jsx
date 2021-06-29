import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Section from '../Section';
import Container from '../Container';

import queryString from 'query-string';

const Form = ({ onSubmit }) => {
  const history = useHistory();
  const { query } = queryString.parse(history.location.search);
  const [value, setValue] = useState(query || '');

  const handleChange = e => {
    setValue(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (value.trim() === '') {
      return;
    }

    onSubmit(value);
  };

  return (
    <Section>
      <Container>
        <p>Find Movie</p>

        <form onSubmit={handleSubmit}>
          <input type="text" name="" value={value} onChange={handleChange} />

          <button type="submit">SEARCH</button>
        </form>
      </Container>
    </Section>
  );
};

export default Form;
