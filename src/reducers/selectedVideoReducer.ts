import { EActionTypes, IVideo } from "../common/types";

interface ISelectVideoActionType {
  type: EActionTypes.selectVideo
  payload: IVideo
}

export default (
  state = null,
  action: ISelectVideoActionType
) => {
  switch (action.type) {
    case EActionTypes.selectVideo:
      return action.payload

    default:
      return state
  }
}