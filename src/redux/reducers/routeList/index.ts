import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
export interface routeItem {
  key: string
  name: string
}

export interface initialStateType {
  routerList: routeItem[]
}

const initialState: initialStateType = {
  routerList: [],
}

export const getRouteList = createAsyncThunk(
  'routeList/getRouteList',
  async () => {
    debugger
    let data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          key: 'sds',
          name: 'sds',
        })
      }, 5000)
    })
    return data
  },
)

const routeListSlice = createSlice({
  name: 'routeList',
  initialState,
  reducers: {
    ADD_ROUTE: (state, action) => {
      state.routerList.push({
        key: '1',
        name: '1',
      })
    },
    DEL_ROUTE: (state, action) => {
      state.routerList.push({
        key: '12',
        name: '2',
      })
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    // Add reducers for additional action types here, and handle loading state as needed
    builder
      .addCase(getRouteList.pending, (state, action) => {
        // Add user to the state array
        state.routerList = []
      })
      .addCase(getRouteList.fulfilled, (state, action) => {
        // Add user to the state array
        state.routerList.push(action.payload as routeItem)
      })
      .addCase(getRouteList.rejected, (state, action) => {
        // Add user to the state array
        state.routerList.push({
          key: 'error',
          name: 'error',
        })
      })
  },
})

export default routeListSlice.reducer
