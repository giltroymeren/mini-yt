import { EActionTypes, IVideo } from "../common/types";

interface IGetVideosActionType {
  type: EActionTypes.getVideos
  payload: IVideo[]
}

interface ISelectVideoActionType {
  type: EActionTypes.selectVideo
  payload: IVideo
}

export default (
  state = { videos: [] },
  action: IGetVideosActionType | ISelectVideoActionType
) => {
  switch (action.type) {
    case EActionTypes.getVideos:
      return action.payload

    default:
      return state
  }
}