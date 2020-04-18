import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Modal,
  Alert,
  Image
} from 'react-native'
// import { Spinner, Toast } from 'native-base'
import { Input, CheckBox } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { connect } from 'react-redux'
import { setRegister } from '../Redux/Actions/Auth/Register'

const { width: WIDTH } = Dimensions.get('window')
class JoinPayLive extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nama: '',
      namaError: null,
      email: '',
      error: null,
      emailError: null,
      phone: 0,
      phoneError: null,
      activeBtn: true,
      checked: false,
      styleBtn: styles.disabledBtn,
      isLoading: false,
      modalVisible: false,
      content: <Text> Berikutnya </Text>
    }
    this.checkname = () => {
      const req = /^^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$$/
      console.log(req.test(this.state.nama))
      if (!req.test(this.state.nama)) {
        this.setState({ namaError: 'Nama anda salah' })
      } else {
        this.setState({ namaError: null })
      }
    }
    this.checkphone = () => {
      console.log('NAKASAS')
      const req = /^(^\+62\s?|^0)(\d{3,4}?){2}\d{3,4}$/
      console.log(req.test(this.state.phone))
      if (!req.test(this.state.phone)) {
        this.setState({ phoneError: 'Nomor ponsel anda salah' })
      } else {
        this.setState({ phoneError: null })
      }
    }
    this.checkemail = () => {
      console.log('check email')
      const req = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (!req.test(this.state.email)) {
        this.setState({ emailError: 'Email anda salah' })
      } else {
        this.setState({ emailError: null })
      }
    }
    this.handleButton = () => {
      this.setState({
        checked: !this.state.checked,
        activeBtn: !this.state.activeBtn
      })
    }
    this.handleSKKP = () => {
      this.props.navigation.navigate('SKKP')
    }

    this.handleRegister = () => {
      const data = {
        fullname: this.state.nama,
        phone: this.state.phone,
        email: this.state.email
      }
      this.props.setRegister(data)
      if (this.props.register.data.success) {
        this.props.navigation.navigate('CodeOTP')
        this.setState({
          modalVisible: !this.state.modalVisible,
          phone: (this.state.phone = 0)
        })
      } else {
        console.log(this.props.register)
        Alert.alert(this.props.register.data.msg)
      }
      // if (this.props.register.isLoading === false) {
      //   this.setState({
      //     isLoading: !this.state.isLoading,
      //     content: this.state.content = <Spinner color='white' />
      //   })
      // } else {
      //   this.setState({
      //     isLoading: !this.state.isLoading,
      //     content: this.state.content = <Text>Berikutnya</Text>,
      //   })
      // }
      console.log(this.props.register)
      console.log(this.props.register.isLoading)
    }
  }

  componentDidMount () {
    this.props.setRegister()
  }

  render () {
    console.disableYellowBox = true
    return (
      <ScrollView style={{ paddingHorizontal: 10 }}>
        <View style={styles.container}>
          <Text style={{ fontSize: 15, textAlign: 'left' }}>
            Terimakasih telah bergabung! Kami akan mengirimkan kode melalui
            email untuk verifikasi proses registrasi
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Input
            containerStyle={{ marginBottom: 10, marginTop: 10 }}
            inputStyle={{ fontSize: 15, marginTop: -5 }}
            label='Nama Lengkap'
            labelStyle={{ color: 'black', fontSize: 12 }}
            onChangeText={text => this.setState({ nama: text })}
            onBlur={() => this.checkname()}
            errorStyle={{ color: 'red' }}
            errorMessage={
              !this.state.namaError ? false : 'Nama harus mengandung alphabet'
            }
          />
          <Input
            containerStyle={{ marginBottom: 10, marginTop: 10 }}
            inputStyle={{ fontSize: 15, marginTop: -5 }}
            label='Nomor Ponsel'
            keyboardType='phone-pad'
            labelStyle={{ color: 'black', fontSize: 12 }}
            onChangeText={text => this.setState({ phone: text })}
            onBlur={() => this.checkphone()}
            errorStyle={{ color: 'red' }}
            errorMessage={
              !this.state.phoneError
                ? false
                : 'Silahkan masukan nomor ponsel anda'
            }
          />
          <Input
            containerStyle={{ marginBottom: 20, marginTop: 10 }}
            inputStyle={{ fontSize: 15, marginTop: -5 }}
            label='Email'
            keyboardType='email-address'
            labelStyle={{ color: 'black', fontSize: 12 }}
            errorStyle={{ color: 'red' }}
            onChangeText={text => this.setState({ email: text })}
            onBlur={() => this.checkemail()}
            errorMessage={
              !this.state.emailError ? false : 'Silahkan masukan email anda'
            }
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CheckBox
              onPress={this.handleButton}
              // title={}
              checked={this.state.checked}
              CheckBox={{ color: '48387E' }}
            />

            <TouchableOpacity onPress={this.handleSKKP}>
              <Text style={styles.textSKKP}>Syarat dan Ketentuan</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={this.handleRegister}
          disabled={this.state.activeBtn}
          style={this.state.activeBtn ? styles.disabledBtn : styles.btn}
        >
          {this.state.content}
        </TouchableOpacity>
        <View style={styles.centeredView}>
          <Modal
            animationType='slide'
            transparent
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.')
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Image
                  source={require('../Assets/Images/success.png')}
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
                      this.props.navigation.navigate('CodeOTP')
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
                    Verifikasi Code yuk.
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    )
  }
}
const mapStateToProps = state => {
  return {
    register: state.Register
  }
}
export default connect(
  mapStateToProps,
  { setRegister }
)(JoinPayLive)

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginLeft: 20
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4a2d8b'
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '100%',
    height: 360,
    justifyContent: 'center'
  },
  inputContainer: {
    marginTop: 20,
    paddingHorizontal: 10
  },
  inputText: {
    marginBottom: 20
  },
  btn: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#00d2d3',
    justifyContent: 'center',
    marginTop: 50,
    alignItems: 'center',
    alignSelf: 'center'
  },
  disabledBtn: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    justifyContent: 'center',
    marginTop: 50,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#CED6E0'
  },
  textSKKP: {
    color: '#1e90ff',
    fontWeight: 'bold'
  }
})
