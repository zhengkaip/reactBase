import { createSlice } from '@reduxjs/toolkit'

export interface tokenState {
  token: string
}

const initialState: tokenState = {
  token: '',
}

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
    },
  },
})

export const { setToken } = tokenSlice.actions

export default tokenSlice.reducer
