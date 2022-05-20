import { HashRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Store from '@/redux'
import App from '@/App'
import Test from '@/pages/Test'
import CCop from '@/pages/CCop'

const RouterConfig = () => {
  return (
    <Provider store={Store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/login" element={<Test />}>
            <Route path=":id" element={<div>123456</div>} />
          </Route>
          <Route path="/cc" element={<CCop />}></Route>
          {/* <Route path="*" element={<Test />}></Route> */}
        </Routes>
        {/* {renderRoutes({ routes: props.routes })} */}
      </HashRouter>
    </Provider>
  )
}

export default RouterConfig
