import { EActionTypes, IVideo } from "../common/types";

interface IClearVideosActionType {
  type: EActionTypes.clearVideos
}

interface IGetVideosActionType {
  type: EActionTypes.getVideos
  payload: IVideo[]
}

interface ISelectVideoActionType {
  type: EActionTypes.selectVideo
  payload: IVideo
}

interface IState {
  list: IVideo[]
  selected: IVideo | null
}

export default (
  state: IState = { list: [], selected: null },
  action: IClearVideosActionType | IGetVideosActionType | ISelectVideoActionType
) => {
  switch (action.type) {
    case EActionTypes.clearVideos:
      return {
        ...state,
        list: []
      }

    case EActionTypes.getVideos:
      return {
        ...state,
        list: action.payload,
        selected: action.payload[0]
      }

    case EActionTypes.selectVideo:
      return {
        ...state,
        selected: action.payload
      }

    default:
      return state
  }
}