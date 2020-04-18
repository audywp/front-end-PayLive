import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { setVerify } from '../Redux/Actions/Auth/Verify'
import { connect } from 'react-redux'

class CodeOTPScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      code: ''
    }

    this.handleVerify = () => {
      this.props.setVerify(this.state.code)
      if (this.props.verify.data.success === true) {
        Alert.alert('Selamat anda telah terdaftar, silahkan buat Security code anda')
      } else {
        Alert.alert('Anda yakin itu kode yang kami berikan ?')
        this.props.navigation.navigate('CodeOTP')
      }
      console.log(this.props)
    }
  }

  componentDidMount () {
    this.props.setVerify()
  }

  render () {
    console.disableYellowBox = true
    return (
      <View>
        <View>
          <Text style={{ color: '#5f27cd', textAlign: 'center', marginTop: 30, fontWeight: 'bold', fontSize: 18, fontFamily: 'Roboto' }}>
            Masukkan Kode
          </Text>
          <Text style={{ textAlign: 'center' }}> Kami telah mengirimkan kode ke email Anda</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 60 }}>
          <TextInput
            onChangeText={text => this.setState({ code: text })}
            style={{ alignSelf: 'center', fontSize: 40 }}
            placeholder='____'
            maxLength={4}
            returnKeyType='next'
          />
        </View>
        <TouchableOpacity onPress={this.handleVerify}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#00d2d3', textAlign: 'center', marginTop: 50 }}>KIRIM</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
const mapStatetoProps = state => {
  return {
    verify: state.Verify
  }
}
export default connect(mapStatetoProps, { setVerify })(CodeOTPScreen)
