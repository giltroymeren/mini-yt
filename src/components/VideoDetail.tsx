import React from 'react';
import { IYouTubeResultItem } from '../common/types';

interface IVideoDetail {
  video: IYouTubeResultItem;
}

const VideoDetail: React.FC<IVideoDetail> = ({ video }) => {
  const getFormattedDate = (date: string): string =>
    new Date(date).toLocaleDateString(undefined, {
      year: 'numeric', month: 'long', day: 'numeric'
    })

  return (
    <div className="card mt-3">
      <img className="card-img-top"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title} />

      <div className="card-body">
        <h5 className="card-title">{video.snippet.title}</h5>
        <p className="card-text">{video.snippet.description}</p>
        <p className="card-text">
          <small className="text-muted">
            Published on {getFormattedDate(video.snippet.publishedAt)}
          </small>
        </p>
      </div>
    </div>
  );
};

export default VideoDetail;
