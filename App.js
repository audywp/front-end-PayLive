import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/screen/LoginScreen'
import Join from './src/screen/JoinPayLiveScreen'
import SKKP from './src/screen/SKKPScreen'
import SecurityCode from './src/screen/SecurityCode'
import LupaSecurityCode from './src/screen/LupaSecurityCode'
import CodeOTP from './src/screen/CodeOTPScreen'

const Stack = createStackNavigator()



export default class App extends Component {
  // static navigationOptions = {
  //     headerTintColor
  // }
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
          <Stack.Screen name='Join PayLive' component={Join} options={{ title: 'Join PayLive', headerShown: true, headerTintColor: '#5f27cd' }} />
          <Stack.Screen name='SKKP' component={SKKP} options={{ title: 'Syarat & Ketentuan', headerShown: true, headerTintColor: '#5f27cd' }} />
          <Stack.Screen name='Security Code' component={SecurityCode} options={{ title: 'SIGN IN', headerShown: true, headerTintColor: '#5f27cd' }} />
          <Stack.Screen name='Lupa Security Code' component={LupaSecurityCode} options={{ title: 'Lupa Security Code', headerShown: true, headerTintColor: '#5f27cd' }} />
          <Stack.Screen name='CodeOTP' component={CodeOTP} options={{ title: 'SIGN IN', headerShown: true, headerTintColor: '#5f27cd' }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
