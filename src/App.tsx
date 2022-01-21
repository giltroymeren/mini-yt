import { useEffect, useState } from 'react';
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import VideoDetail from './components/VideoDetail'
import { IYouTubeResultItem } from './common/types'
import VideoList from './components/VideoList';
import useVideos from './hooks/useVideos'

function App() {
  const [selectedVideo, setSelectedVideo] = useState<IYouTubeResultItem>()
  const { list, onSearch } = useVideos('mochi')

  useEffect(() => {
    setSelectedVideo(list.data.items[0])
  }, [list])

  const onSetSelectedVideo = (video: IYouTubeResultItem): void => {
    setSelectedVideo(video)
  }

  return (
    <>
      <NavBar />

      <div className='container'>
        <SearchBar onSearch={onSearch} />

        <div className='row'>
          {selectedVideo && (
            <div className='col col-md-9'>
              <VideoDetail video={selectedVideo} />
            </div>
          )}

          <div className={`col ${selectedVideo && "col-md-3"}`}>
            <VideoList list={list} onSetSelectedVideo={onSetSelectedVideo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
