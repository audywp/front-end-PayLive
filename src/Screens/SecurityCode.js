import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'

export default class SecurityCode extends Component {
  constructor (props) {
    super(props)
    this.handleScreenToLupaSecurityCode = () => {
      this.props.navigation.navigate('Lupa Security Code')
    }
    this.handleScreenToLogin = () => {
      this.props.navigation.navigate('Home')
    }
  }

  render () {
    console.disableYellowBox = true
    return (
      <View>
        <View>
          <Text style={{ color: '#5f27cd', textAlign: 'center', marginTop: 30, fontWeight: 'bold', fontSize: 18, fontFamily: 'Roboto' }}>
            Masukan Security Code Anda
          </Text>
        </View>
        <View>
          <TextInput
            style={{ alignSelf: 'center', fontSize: 40 }}
            keyboardType='phone-pad'
            placeholder='_ _ _ _ _ _'
          />
        </View>
        <TouchableOpacity onPress={this.handleScreenToLogin}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#00d2d3', textAlign: 'center', marginTop: 50 }}>KIRIM</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleScreenToLupaSecurityCode}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#00d2d3', textAlign: 'center', marginTop: 50 }}>LUPA SECURITY CODE?</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
