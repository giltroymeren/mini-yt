import React, { useState } from 'react';
import VideoList from './VideoList'
import youtube from '../common/youtube'
import { IYouTubeResults } from '../common/types'

const SearchBar = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState<IYouTubeResults>({
    data: {
      items: []
    }
  })

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  }

  const onClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()

    const result: IYouTubeResults = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    console.log(result)
    setResults(result)
  }

  return (
    <div className='container mt-5'>
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

      <VideoList list={results.data.items} />
    </div>
  );
};

export default SearchBar;
