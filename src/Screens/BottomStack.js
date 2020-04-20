import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Deals from './Deals'
import Scan from './Scan'
import Finance from './Finance'
import Profile from './Profile'
import IconHome from 'react-native-vector-icons/Foundation'
import IconScan from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/FontAwesome5'
import IconUser from 'react-native-vector-icons/FontAwesome'
const BottomTabs = createBottomTabNavigator()

class BottomStack extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <>
        <BottomTabs.Navigator
          tabBarOptions={{
            activeTintColor: '#5f27cd'
          }}
        >
          <BottomTabs.Screen
            name='Home' component={Home} options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <IconHome name='home' color={color} size={size} />
              )
            }}
          />
          <BottomTabs.Screen
            name='Deals' component={Deals} options={{
              tabBarLabel: 'Deals',
              tabBarIcon: ({ color, size }) => (
                <IconScan name='tag' color={color} size={size} />
              )
            }}
          />
          <BottomTabs.Screen
            name='Scan' component={Scan} options={{
              tabBarLabel: 'Scan',
              tabBarIcon: ({ color, size }) => (
                <IconScan name='qrcode-scan' color={color} size={size} />
              )
            }}
          />
          <BottomTabs.Screen
            name='Finance' component={Finance} options={{
              tabBarLabel: 'Finance',
              tabBarIcon: ({ color, size }) => (
                <Icon name='money-bill-wave' color={color} size={size} />
              )
            }}
          />
          <BottomTabs.Screen
            name='Profile' component={Profile} options={{
              tabBarLabel: 'Profile',
              tabBarIcon: ({ color, size }) => (
                <IconUser name='user-circle-o' color={color} size={size} />
              )
            }}
          />
        </BottomTabs.Navigator>
      </>
    )
  }
}

export default BottomStack
