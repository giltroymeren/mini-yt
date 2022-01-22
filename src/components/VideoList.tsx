import React from 'react';
import { connect } from 'react-redux';

import VideoItem from './VideoItem'
import { IVideo } from '../common/types'
import { TRootState } from '../store'

interface IVideoList {
  videos: IVideo[]
  onSetSelectedVideo: (video: IVideo) => void
}

const VideoList: React.FC<IVideoList> = ({
  videos,
  onSetSelectedVideo,
}) => {
  return (
    <div className='mt-3'>
      {videos.map((item: IVideo) => (
        <VideoItem key={item.etag}
          video={item}
          onSetSelectedVideo={onSetSelectedVideo} />)
      )}
    </div>
  );
};

const mapStateToProps = (state: TRootState) => {
  return {
    videos: state.videos
  }
}

export default connect(
  mapStateToProps, {}
)(VideoList)
