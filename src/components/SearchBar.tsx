import React, { useState } from 'react';

const SearchBar = () => {
  const [term, setTerm] = useState('')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  }

  const onClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(term)
  }

  return (
    <div>
      <input type='text'
        placeholder='Enter what you are looking for'
        name='term'
        value={term}
        onChange={onChange} />
      <button onClick={onClick}>Search</button>
    </div>
  );
};

export default SearchBar;
