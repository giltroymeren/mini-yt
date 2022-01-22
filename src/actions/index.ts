import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import youtube from '../api/youtube'
import { EActionTypes, IVideo } from '../common/types'

interface IYouTubeResults {
  data: {
    items: IVideo[];
  }
}


export const getVideos = (term: string) =>
  async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    const response: IYouTubeResults = await youtube.get('/search', {
      params: {
        q: term
      }
    })

    dispatch({
      type: EActionTypes.getVideos,
      payload: response.data.items
    })
  }