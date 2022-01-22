import youtube from '../api/youtube'
import { IYouTubeResults } from '../common/types'
import { useEffect, useState } from 'react'

const useVideos = (defaultTerm: string) => {
  const [list, setList] = useState<IYouTubeResults>({
    data: {
      items: []
    }
  })

  useEffect(() => {
    onSearch(defaultTerm)
  }, [defaultTerm])

  const onSearch = async (term: string) => {
    const result: IYouTubeResults = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    setList(result)
    return result
  }

  return { list, onSearch }
}

export default useVideos