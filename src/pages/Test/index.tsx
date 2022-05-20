import React from 'react'
import { useParams, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setToken } from '@/redux/reducers/token/index'
import { stateType } from '@/redux/index'

function Test() {
  let params = useParams()
  let a = 222
  console.log(params)
  const dispatch = useDispatch()
  const state = useSelector((state: stateType) => state.token.token)
  console.log('state', state)
  return (
    <div
      onClick={() => {
        dispatch(setToken(1))
      }}
    >
      Testdwew
      {a}
      <Outlet />
    </div>
  )
}

export default Test
