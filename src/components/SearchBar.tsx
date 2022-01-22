import React, { useState } from 'react';
import { connect } from 'react-redux';

import { IRootState, IYouTubeResultItem, IYouTubeResults } from '../common/types'
import { getVideos } from '../actions'

interface IComponentProps {
  videos?: IYouTubeResultItem[]
  getVideos: (term: string) => Promise<void>
}

const SearchBar = ({
  videos,
  getVideos
}: IComponentProps) => {
  const [term, setTerm] = useState('')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTerm(event.target.value)
  }

  const onClick =
    async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      getVideos(term)
      console.log(videos)
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

const mapStateToProps = (state: IRootState) => {
  return {
    video: state.videos
  }
}

export default connect(
  mapStateToProps,
  { getVideos }
)(SearchBar)
