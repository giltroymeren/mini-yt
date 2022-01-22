import { useEffect, useState } from 'react';
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import { IVideo } from './common/types'
import VideoList from './components/VideoList';

function App() {
  const [selectedVideo, setSelectedVideo] = useState<IVideo>()

  const onSetSelectedVideo = (video: IVideo): void => {
    setSelectedVideo(video)
  }

  return (
    <>
      <NavBar />

      <div className='container'>
        <SearchBar />

        <div className='row'>
          {selectedVideo && (
            <div className='col col-md-9'>
              <VideoDetail video={selectedVideo} />
            </div>
          )}

          <div className={`col ${selectedVideo && "col-md-3"}`}>
            <VideoList onSetSelectedVideo={onSetSelectedVideo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
