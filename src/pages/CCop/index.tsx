import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getRouteList } from '@/redux/reducers/routeList'

function CCop() {
  let navigate = useNavigate()
  let dispatch = useDispatch()
  dispatch(getRouteList())
  return <div onClick={() => navigate(-1)}>CCop</div>
}

export default CCop
