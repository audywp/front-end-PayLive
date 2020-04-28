import React, { Component } from 'react'
import { Spinner } from 'native-base'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { setVerify } from '../Redux/Actions/Auth/Verify'
import { connect } from 'react-redux'

class CodeOTPScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      code: '',
      content: <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#00d2d3', textAlign: 'center', marginTop: 50 }}>KIRIM</Text>,
      modalVisible: false,
      id: 0
    }

    this.handleVerify = async () => {
      const data = {
        id: this.props.route.params.data,
        code: this.state.code
      }
      this.props.setVerify(data.id, data.code).then(() => {
        if (this.props.verify.isVerified) {
          this.props.navigation.navigate('Buat Code', { data: data.id })
        }
        if (this.props.verify.isLoading === true) {
          this.setState({
            content: this.state.content = <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#00d2d3', textAlign: 'center', marginTop: 50 }}>KIRIM</Text>
          })
        }
      })
      if (this.props.verify.isLoading === false) {
        this.setState({
          content: this.state.content = <Spinner color='#00d2d3' />
        })
      }
    }
  }

  render () {
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
          {this.state.content}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Kode telah di kirim, silahkan cek email anda')}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#00d2d3', textAlign: 'center', marginTop: 50 }}>Kirim kode lagi ?</Text>
        </TouchableOpacity>
        {/* <Modal
          animationType='slide'
          transparent
          visible={this.props.register.isRegistered === false ? this.state.modalVisible === true : this.state.modalVisible === false}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Image
                source={require('../Assets/Images/security.png')}
                resizeMode='cover'
                style={{ width: 300, height: 200, marginBottom: 20 }}
              />
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                {' '}
                Kode verifikasi mu sudah di kirim.{' '}
              </Text>
              <Text style={{ fontSize: 18, marginBottom: 20 }}>
                {' '}
                lewat email{' '}
              </Text>
              <TouchableOpacity style={styles.textStyle}>
                <Text
                  onPress={() => {
                    this.setState({
                      modalVisible: !this.state.modalVisible
                    })
                    this.props.navigation.navigate('CodeOTP', { data: this.props.register.data.id })
                  }}
                  style={{
                    paddingVertical: 20,
                    paddingHorizontal: 15,
                    backgroundColor: '#00d2d3',
                    color: '#4a2d8b',
                    borderRadius: 10
                  }}
                >
                  {' '}
                  Sedikit lagi
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal> */}
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

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 20,
//     marginLeft: 20
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#4a2d8b'
//   },
//   modalView: {
//     margin: 10,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 35,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//     width: '100%',
//     height: 360,
//     justifyContent: 'center'
//   }
// })
