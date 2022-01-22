import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'
import youtube from '../common/youtube'
import { IYouTubeResults } from '../common/types'

export enum EActionTypes {
  'getVideos'
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