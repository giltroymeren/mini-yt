import React from 'react';
import { IYouTubeResultItem } from '../common/types'

const VideoList: React.FC<{list: IYouTubeResultItem[]}> = ({ list }) => {
  const videos = list.map(item => <li key={item.etag}>{item.etag}</li>)

  return (
    <>
    {videos}
    </>
  );
};

export default VideoList;
