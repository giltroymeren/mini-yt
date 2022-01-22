import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from '../reducers'

export const store = createStore(reducers, applyMiddleware(thunk))

export type TRootState = ReturnType<typeof store.getState>
export type TAppDispatch = typeof store.dispatch
