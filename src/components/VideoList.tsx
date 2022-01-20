import React from 'react';
import VideoItem from './VideoItem'
import { IYouTubeResultItem, IYouTubeResults } from '../common/types'

const VideoList: React.FC<{ list: IYouTubeResults }> = ({ list }) => {
  return (
    <div className='container mt-3'>
      {list.data.items.map((item: IYouTubeResultItem) => (
        <VideoItem key={item.etag} video={item} />)
      )}
    </div>
  );
};

export default VideoList;
