import React from 'react';
import { IVideo } from '../common/types';
import { htmlUnescape } from 'escape-goat'

interface IVideoDetail {
  video: IVideo;
}

const VideoDetail: React.FC<IVideoDetail> = ({ video }) => {
  const getFormattedDate = (date: string): string =>
    new Date(date).toLocaleDateString(undefined, {
      year: 'numeric', month: 'long', day: 'numeric'
    })

  const videoSource = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div className="card mt-3">
      <iframe src={videoSource}
        style={{
          minHeight: '240px',
          height: '480px',
          maxHeight: '480px',
        }}
        title={video.snippet.title} />

      <div className="card-body">
        <h5 className="card-title">{htmlUnescape(video.snippet.title)}</h5>
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
