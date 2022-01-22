import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from '../reducers'

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
