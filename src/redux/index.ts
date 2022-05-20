import { configureStore } from '@reduxjs/toolkit'
import routeListSlice, { initialStateType } from './reducers/routeList'
import tokenSlice, { tokenState } from './reducers/token'

export interface stateType {
  routeList: initialStateType
  token: tokenState
}

const reducer = {
  routeList: routeListSlice,
  token: tokenSlice,
}
const store = configureStore({
  reducer,
})

export default store
