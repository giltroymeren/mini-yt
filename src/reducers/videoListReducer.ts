import { EActionTypes, IVideo } from "../common/types";

interface IClearVideosActionType {
  type: EActionTypes.clearVideos
}

interface IGetVideosActionType {
  type: EActionTypes.getVideos
  payload: IVideo[]
}

export default (
  state = { videos: [] },
  action: IClearVideosActionType | IGetVideosActionType
) => {
  switch (action.type) {
    case EActionTypes.clearVideos:
      return []

    case EActionTypes.getVideos:
      return action.payload

    default:
      return state
  }
}