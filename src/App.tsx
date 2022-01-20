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

  const onSetVideoList = (list: IYouTubeResults): void => {
    setVideoList(list)
    setSelectedVideo(list.data.items[0])
  }
  const onSetSelectedVideo = (video: IYouTubeResultItem): void => {
    setSelectedVideo(video)
  }

  return (
    <>
      <NavBar />

      <div className='container'>
        <SearchBar onSetVideoList={onSetVideoList} />

        <div className='row'>
          {selectedVideo && (
            <div className='col col-md-9'>
              <VideoDetail video={selectedVideo} />
            </div>
          )}

          <div className={`col ${selectedVideo && "col-md-3"}`}>
            <VideoList list={videoList} onSetSelectedVideo={onSetSelectedVideo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
