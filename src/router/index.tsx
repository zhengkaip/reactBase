import React from 'react'
import Store from '@/redux'
import { HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import RouterConfig from './routerConfig'
import { AuthProvider } from './Auth'

const Router = () => {
  return (
    <Provider store={Store}>
      <AuthProvider>
        <HashRouter>
          {/* <Routes> */}
          <RouterConfig />
          {/* </Routes> */}
        </HashRouter>
      </AuthProvider>
    </Provider>
  )
}

export default Router
