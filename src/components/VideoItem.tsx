import React from 'react';
import { IYouTubeResultItem } from '../common/types';

const VideoItem: React.FC<{ video: IYouTubeResultItem }> = ({ video }) => {
  const url = 'https://www.youtube.com/watch?v='

  return (
    <div className="card">
      <a href={`${url}${video.id.videoId}`}><img className="card-img-top"
        src={video.snippet.thumbnails.high.url}
        alt={video.snippet.title} />
      </a>
      <div className="card-body">
        <h5 className="card-title">{video.snippet.title}</h5>
        <p className="card-text">{video.snippet.description}</p>
      </div>
    </div>
  )
};

export default VideoItem;
