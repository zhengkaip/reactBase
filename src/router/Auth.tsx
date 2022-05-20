import React, {
  useState,
  createContext,
  useContext,
  FC,
  ReactElement,
} from 'react'
import { Navigate } from 'react-router'
import { RouteProps, NavigateProps } from 'react-router-dom'

interface authType {
  authed: Boolean
}

const AuthContext = createContext<authType>({ authed: false })

/**
 * 自定义hook，函数返回 Context 值，包括 authed状态、login、logout函数来修改authed状态
 */
function useAuth() {
  const [authed, setAuthed] = useState(false)

  return {
    authed,
    login() {
      return new Promise((res) => {
        setAuthed(true)
        res('')
      })
    },
    logout() {
      return new Promise((res) => {
        setAuthed(false)
        res('')
      })
    },
  }
}

// 将context值传递给了Context Provider，并返回该组件用于广播context值
export const AuthProvider: FC = ({ children }) => {
  const auth = useAuth()

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

// 返回 Context 值
export default function AuthConsumer() {
  return useContext(AuthContext)
}

/**
 * @description
 * 封装拦截组件,如果已登录，返回包括的children组件；
 * 未登录，返回 <Navigate to="/user" /> 组件跳转到登录页面。
 *
 * @example
 * <RequireAuth>
 *   <ComponentNeedAuth />
 * </RequireAuth>
 */

export const RequireAuth = ({ children }: RouteProps) => {
  const { authed } = AuthConsumer()

  return authed === true ? (
    (children as ReactElement<any>)
  ) : (
    <Navigate to="/index" replace />
  )
}
