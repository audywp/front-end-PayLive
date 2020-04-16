import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomStack from './src/Screens/BottomStack'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <>
        <NavigationContainer>
          <BottomStack />
        </NavigationContainer>
      </>
    )
  }
}

export default App
