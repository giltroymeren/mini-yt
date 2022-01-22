import React from 'react';
import { connect } from 'react-redux';

import VideoItem from './VideoItem'
import { IVideo } from '../common/types'
import { TRootState } from '../store';

interface IVideoList {
  videos: IVideo[]
}

const VideoList: React.FC<IVideoList> = ({
  videos
}) => {
  return (
    <div className='mt-3'>
      {!videos.length && (
        <div className="alert alert-secondary" role="alert">
          No videos available. Try searching for some!
        </div>
      )}

      {videos.length && videos.map((item: IVideo) => (
        <VideoItem key={item.etag}
          video={item} />)
      )}
    </div>
  );
};

const mapStateToProps = (state: TRootState) => {
  console.log(state)
  return {
    videos: state.videos
  }
}

export default connect(
  mapStateToProps, {}
)(VideoList)
