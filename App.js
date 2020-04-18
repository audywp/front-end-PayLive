import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/Screens/LoginScreen'
import Join from './src/Screens/JoinPayLiveScreen'
import SKKP from './src/Screens/SKKPScreen'
import SecurityCode from './src/Screens/SecurityCode'
import LupaSecurityCode from './src/Screens/LupaSecurityCode'
import CodeOTP from './src/Screens/CodeOTPScreen'
import GreetingUser from './src/Screens/GreetingUser'
import BottomStack from './src/Screens/BottomStack'
import MakeSecurity from './src/Screens/MakeSecurity'
import TopUp from './src/Screens/TopUp'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/Redux/Store'
const Stack = createStackNavigator()

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name='Greeting User' component={GreetingUser} options={{ headerShown: false }} />
              <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
              <Stack.Screen name='Join PayLive' component={Join} options={{ title: 'Join PayLive', headerShown: true, headerTintColor: '#5f27cd' }} />
              <Stack.Screen name='SKKP' component={SKKP} options={{ title: 'Syarat & Ketentuan', headerShown: true, headerTintColor: '#5f27cd' }} />
              <Stack.Screen name='Security Code' component={SecurityCode} options={{ title: 'SIGN IN', headerShown: true, headerTintColor: '#5f27cd' }} />
              <Stack.Screen name='Buat Code' component={MakeSecurity} options={{ title: 'SIGN IN', headerShown: true, headerTintColor: '#5f27cd' }} />
              <Stack.Screen name='Lupa Security Code' component={LupaSecurityCode} options={{ title: 'Lupa Security Code', headerShown: true, headerTintColor: '#5f27cd' }} />
              <Stack.Screen name='CodeOTP' component={CodeOTP} options={{ title: 'SIGN IN', headerShown: true, headerTintColor: '#5f27cd' }} />
              <Stack.Screen name='Home' component={BottomStack} options={{ headerShown: false }} />
              <Stack.Screen name='Top Up' component={TopUp} />
            </Stack.Navigator>
          </NavigationContainer>
        </PersistGate>
      </Provider>
    )
  }
}
