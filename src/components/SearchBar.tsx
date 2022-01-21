import React, { useState } from 'react';
import { IYouTubeResults } from '../common/types'

interface ISearchBar {
  onSearch: (term: string) => Promise<IYouTubeResults>;
}

const SearchBar: React.FC<ISearchBar> = ({
  onSearch
}) => {
  const [term, setTerm] = useState('')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  }

  const onClick =
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      onSearch(term)
    }

  return (
    <div className='mt-5'>
      <div className="input-group">
        <input type='text'
          placeholder='Enter what you are looking for'
          name='term'
          className='form-control form-control-lg'
          value={term}
          onChange={onChange} />
        <button className="btn btn-primary form-control-lg"
          type="submit"
          onClick={onClick}>Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
