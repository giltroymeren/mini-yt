import { combineReducers } from "redux";
import videoListReducer from './videoListReducer'
import selectedVideoReducer from './selectedVideoReducer'

export const rootReducer = combineReducers({
  videos: videoListReducer,
  selectedVideo: selectedVideoReducer
})
