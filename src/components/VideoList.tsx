import React from 'react';
import VideoItem from './VideoItem'
import { IYouTubeResultItem, IYouTubeResults } from '../common/types'

interface IVideoList {
  list: IYouTubeResults,
  onSetSelectedVideo: (video: IYouTubeResultItem) => void;
}

const VideoList: React.FC<IVideoList> = ({ list, onSetSelectedVideo }) => {
  return (
    <div className='mt-3'>
      {list.data.items.map((item: IYouTubeResultItem) => (
        <VideoItem key={item.etag}
          video={item}
          onSetSelectedVideo={onSetSelectedVideo} />)
      )}
    </div>
  );
};

export default VideoList;
