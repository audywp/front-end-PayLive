import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/Redux/Store'
import Stack from './src/Screens/Stack'

export default class App extends Component {
  render () {
    console.disableYellowBox = true
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Stack />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    )
  }
}
