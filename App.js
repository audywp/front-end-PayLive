import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/Screen/LoginScreen'
import Join from './src/Screen/JoinPayLiveScreen'
import SKKP from './src/Screen/SKKPScreen'
import SecurityCode from './src/Screen/SecurityCode'
import LupaSecurityCode from './src/Screen/LupaSecurityCode'
import CodeOTP from './src/Screen/CodeOTPScreen'
import GreetingUser from './src/Screen/GreetingUser'
import BottomStack from './src/Screen/BottomStack'
const Stack = createStackNavigator()



export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Greeting User' component={GreetingUser} options={{ headerShown: false }} />
          <Stack.Screen name='Home' component={BottomStack} options={{ headerShown: false }} />
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

