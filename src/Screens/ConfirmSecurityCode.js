import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { MakeSecurity } from '../Redux/Actions/Auth/CreateSecurityCode'
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    confirm: state.MakeSecurity
  }
}

export default connect(mapStateToProps, { MakeSecurity })(class SecurityCode extends Component {
  constructor (props) {
    super(props)
    this.state = {
      id: 0,
      securityCode: ''
    }
    this.handleScreenToLogin = () => {
      const data = {
        id: this.props.route.params.data
      }
      this.props.MakeSecurity(data.id, data.securityCode)
      if (this.props.confirm.isLoading === true) {

      }
    }
  }

  render () {
    console.disableYellowBox = true
    if (this.props.confirm.data.success === true) {
      this.props.navigation.navigate('Login', { data: data.id })
    }
    return (
      <View>
        <View>
          <Text style={{ color: '#5f27cd', textAlign: 'center', marginTop: 30, fontWeight: 'bold', fontSize: 18, fontFamily: 'Roboto' }}>
            Masukan Security Code Anda
          </Text>
        </View>
        <View>
          <TextInput
            onChangeText={text => this.setState({ security: text })}
            style={{ alignSelf: 'center', fontSize: 40 }}
            maxLength={6}
            textContentType='password'
            keyboardType='phone-pad'
            placeholder='_ _ _ _ _ _'
          />
        </View>
        <TouchableOpacity onPress={this.handleScreenToLogin}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#00d2d3', textAlign: 'center', marginTop: 50 }}>KIRIM</Text>
        </TouchableOpacity>
      </View>
    )
  }
})
