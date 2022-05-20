import React from 'react'
import { Card, Toast, Button } from 'antd-mobile'

import Style from './App.module.scss'

function App() {
  return (
    <>
      <Button className={Style.btn} color="primary">
        Primary
      </Button>
      <p className={Style.p}>ppp</p>
      <Card title="卡片标题" className={Style.p}>
        卡片内容
      </Card>
    </>
  )
}

export default App
