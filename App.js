import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './src/Redux/Store'
import Stack from './src/Screens/Stack'
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  console.disableYellowBox = true
  useEffect(() => {
    SplashScreen.hide()
  })
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

export default App;