import React from 'react';
import VideoItem from './VideoItem'
import { IYouTubeResultItem } from '../common/types'

const VideoList: React.FC<{ list: IYouTubeResultItem[] }> = ({ list }) => {
  return (
    <>
      {list.map(item => <VideoItem key={item.etag} video={item} />)}
    </>
  );
};

export default VideoList;
