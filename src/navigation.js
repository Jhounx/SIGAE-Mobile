import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './pages/Home'
import Login from './pages/Login'

const {Navigator, Screen} = createStackNavigator()

const Navigation = () => {
  return(
    <Navigator headerMode="none" initialRouteName="Home">
      <Screen name="Home" component={Home}/>
      <Screen name="Login" component={Login} />      
    </Navigator>
  )
}   

export default Navigation