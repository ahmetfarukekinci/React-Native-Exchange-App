import React from 'react'
import { Header, Title } from 'native-base'
import { Constants } from 'expo'
const top = Constants.statusBarHeight;
const HeaderApp = () => {
  return (
    <Header
      style={{ marginTop: top, backgroundColor: '#ff0055', justifyContent: 'center', alignItems: 'center' }}
      androidStatusBarColor='#000000'>
      <Title>Foreign Exchange</Title>
    </Header>
  )
}
export default HeaderApp; 