import { EActionTypes, IVideo } from "../common/types";

interface IGetVideosActionType {
  type: EActionTypes.getVideos
  payload: IVideo[]
}

export default (
  state = [],
  action: IGetVideosActionType
) => {
  switch (action.type) {
    case EActionTypes.getVideos:
      return action.payload
    default:
      return state
  }
}