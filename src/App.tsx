import { useState } from 'react';
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import { IYouTubeResults } from './common/types'
import VideoList from './components/VideoList';

function App() {
  const [videoList, setVideoList] = useState<IYouTubeResults>({
    data: {
      items: []
    }
  })

  const onSetVideoList = (list: IYouTubeResults): void => setVideoList(list)

  return (
    <>
      <NavBar />
      <SearchBar onSetVideoList={onSetVideoList} />
      <VideoList list={videoList} />
    </>
  );
}

export default App;
