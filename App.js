import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomStack from './src/Screens/BottomStack'
import { createStackNavigator } from '@react-navigation/stack'
import TopUp from './src/Screens/TopUp'
const Stack = createStackNavigator()

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <>
        <NavigationContainer>
          <Stack.Screen name='Home' component={BottomStack} />
          {/* <Stack.Screen name='Top Up' component={TopUp} /> */}
        </NavigationContainer>
      </>
    )
  }
}

export default App
