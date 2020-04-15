import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'

const BottomTabs = createBottomTabNavigator()

class BottomStack extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <>
        <BottomTabs.Navigator>
          <BottomTabs.Screen name='Home' component={Home} />
        </BottomTabs.Navigator>
      </>
    )
  }
}

export default BottomStack
