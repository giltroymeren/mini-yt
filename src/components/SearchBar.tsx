import React, { useState } from 'react';
import youtube from '../common/youtube'

interface IYouTubeResultItem {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  }
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: object;
    channelTitle: string;
    liveBroadcastContent: string;
    publishTime: string;
  }
}

interface IYouTubeResults {
  items: IYouTubeResultItem[];
}

const SearchBar = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState<IYouTubeResults>({
    items: []
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

    setResults(result)
    console.log(result)
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
    </div>
  );
};

export default SearchBar;
