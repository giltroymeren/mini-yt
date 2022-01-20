import React from 'react';
import { IYouTubeResultItem } from '../common/types';

const VideoItem: React.FC<{ video: IYouTubeResultItem }> = ({ video }) => {
  const url = 'https://www.youtube.com/watch?v='

  return (
    <div className="card mt-2">
      <a href={`${url}${video.id.videoId}`}><img className="card-img-top"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title} />
      </a>
      <div className="card-body">
        <h5 className="card-title">{video.snippet.title}</h5>
      </div>
    </div>
  )
};

export default VideoItem;
