import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/screen/LoginScreen'
import Join from './src/screen/JoinPayLiveScreen'
import SKKP from './src/screen/SKKPScreen'
import Verifikasi from './src/screen/VerificationCode'

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
          <Stack.Screen name='Verifikasi Kode' component={Verifikasi} options={{ title: 'SIGN IN', headerShown: true, headerTintColor: '#5f27cd' }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
