import React from 'react';
import { IVideo } from '../common/types';
import { htmlUnescape } from 'escape-goat'

interface IVideoItem {
  video: IVideo,
  onSetSelectedVideo: (video: IVideo) => void;
}

const VideoItem: React.FC<IVideoItem> = ({ video, onSetSelectedVideo }) => {
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
        <small className="card-title">{htmlUnescape(video.snippet.title)}</small>
      </div>
    </div>
  )
};

export default VideoItem;
