import React from 'react';
import VideoItem from './VideoItem'
import { IRootState, IYouTubeResultItem } from '../common/types'
import { connect } from 'react-redux';

interface IVideoList {
  videos: IYouTubeResultItem[]
  onSetSelectedVideo: (video: IYouTubeResultItem) => void
}

const VideoList: React.FC<IVideoList> = ({
  videos,
  onSetSelectedVideo,
}) => {
  return (
    <div className='mt-3'>
      {videos.map((item: IYouTubeResultItem) => (
        <VideoItem key={item.etag}
          video={item}
          onSetSelectedVideo={onSetSelectedVideo} />)
      )}
    </div>
  );
};

const mapStateToProps = (state: IRootState) => {
  return {
    videos: state.videos
  }
}

export default connect(
  mapStateToProps, {}
)(VideoList)
