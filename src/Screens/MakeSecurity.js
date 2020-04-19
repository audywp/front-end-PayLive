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
    const id = this.props.route.params.data
    this.handleScreenToLogin = () => {
      const data = {
        securityCode: this.state.securityCode
      }
      this.props.MakeSecurity(id, data)
      console.log(data.securityCode)
    }
  }

  render () {
    if (this.props.confirm.data.success === true) {
      this.props.navigation.navigate('Login', { data: this.props.route.params.data })
    }
    return (
      <View>
        <View>
          <Text style={{ color: '#5f27cd', textAlign: 'center', marginTop: 30, fontWeight: 'bold', fontSize: 18, fontFamily: 'Roboto' }}>
            Buat Security Code Anda
          </Text>
        </View>
        <View>
          <TextInput
            onChangeText={text => this.setState({ securityCode: text })}
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
