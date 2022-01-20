import { useState } from 'react';
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import { IYouTubeResultItem, IYouTubeResults } from './common/types'
import VideoList from './components/VideoList';

function App() {
  const [videoList, setVideoList] = useState<IYouTubeResults>({
    data: {
      items: []
    }
  })

  const [selectedVideo, setSelectedVideo] = useState<IYouTubeResultItem>()

  const onSetVideoList = (list: IYouTubeResults): void => setVideoList(list)
  const onSetSelectedVideo = (video: IYouTubeResultItem): void => {
    console.log(video.id.videoId)
    setSelectedVideo(video)
  }

  return (
    <>
      <NavBar />

      <div className='container'>
        <SearchBar onSetVideoList={onSetVideoList} />

        <div className='row'>
          {selectedVideo && (
            <div className='col col-sm-9'>
              <VideoDetail video={selectedVideo} />
            </div>
          )}

          <div className='col'>
            <VideoList list={videoList} onSetSelectedVideo={onSetSelectedVideo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
