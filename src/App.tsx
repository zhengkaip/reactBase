import React from 'react'
import { Card, Toast, Button } from 'antd-mobile'

import styles from './App.module.scss'

function App() {
    const onClick = () => {
    Toast.show('点击了卡片')
    }

    const onHeaderClick = () => {
    Toast.show('点击了卡片Header区域')
    }

    const onBodyClick = () => {
        Toast.show('点击了卡片Body区域')
    }
  return (
    <>
        <Button color='primary'>Primary</Button>
    </>
  );
}

export default App;
