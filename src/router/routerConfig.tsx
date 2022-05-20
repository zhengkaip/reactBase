import React from 'react'
import { useRoutes } from 'react-router-dom'
import CCop from '@/pages/CCop'
import Test from '@/pages/Test'
import Page404 from '@/pages/Page404'
import { RequireAuth } from './Auth'

function RouterConfig() {
  const routes = useRoutes([
    {
      path: '/index',
      element: <CCop />,
    },
    {
      path: '/login',
      element: (
        <RequireAuth>
          <Test />
        </RequireAuth>
      ),
    },
    {
      path: '*',
      element: <Page404 />,
    },
  ])
  return routes
}

export default RouterConfig
