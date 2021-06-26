import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState('');

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
    <>
      <p>Find Movie</p>

      <form onSubmit={handleSubmit}>
        <input type="text" name="" value={value} onChange={handleChange} />

        <button type="submit">SEARCH</button>
      </form>
    </>
  );
};

export default Form;
