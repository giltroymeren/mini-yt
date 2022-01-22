import { EActionTypes } from "../actions";
import { IYouTubeResultItem } from "../common/types";

interface IGetVideosActionType {
  type: EActionTypes.getVideos
  payload: IYouTubeResultItem[]
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