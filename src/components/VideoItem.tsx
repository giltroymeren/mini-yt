import React from 'react';
import { IYouTubeResultItem } from '../common/types';

interface IVideoItem {
  video: IYouTubeResultItem,
  onSetSelectedVideo: (video: IYouTubeResultItem) => void;
}

const VideoItem: React.FC<IVideoItem> = ({ video, onSetSelectedVideo }) => {
  const url = 'https://www.youtube.com/watch?v='

  const onClick =
    (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
      onSetSelectedVideo(video)
    }

  return (
    <div className="card bg-light mt-2"
      style={{ cursor: 'pointer' }}
      onClick={onClick}>
      <img className="card-img-top"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title} />

      <div className="card-body">
        <h5 className="card-title">{video.snippet.title}</h5>
      </div>
    </div>
  )
};

export default VideoItem;
