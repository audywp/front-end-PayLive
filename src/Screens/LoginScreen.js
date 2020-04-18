import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Alert } from 'react-native'
import { Form, Item, Input, Label, Spinner, Toast } from 'native-base'
import IconUser from 'react-native-vector-icons/EvilIcons'
import { setLogin } from '../Redux/Actions/Auth/Login'
import { connect } from 'react-redux'

const { width: WIDTH } = Dimensions.get('window')
class LoginScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      phone: 0,
      phoneError: null,
      isLoading: false,
      content: <Text syle={{ color: 'white' }}> Berikutnya </Text>
    }
    this.handleRegister = () => {
      this.props.navigation.navigate('Join PayLive')
    }
    this.checkphone = () => {
      console.log('jajaja')
      const req = /^(^\+62\s?|^0)(\d{3,4}?){2}\d{3,4}$/
      console.log(req.test(this.state.phone))
      if (!req.test(this.state.phone)) {
        this.setState({ phoneError: 'Nomor ponsel anda salah' })
      } else {
        this.setState({ phoneError: null })
      }
    }
    this.handleLogin = () => {
      const data = {
        phone: this.state.phone
      }
      this.props.setLogin(data)
      if (this.props.login.data.success === true) {
        console.log('true')
        if (this.props.login.isLoading === false) {
          this.setState({
            isLoading: !this.state.isLoading,
            content: this.state.content = <Spinner color='white' />
          })
        }
        if (this.props.login.isLoading === true) {
          this.setState({
            isLoading: this.state.isLoading,
            content: this.state.content = <Text> Berikutnya </Text>
          })
        }
        this.props.navigation.navigate('Security Code')
      } else {
        if (this.props.login.isLoading === false) {
          this.setState({
            isLoading: !this.state.isLoading,
            content: this.state.content = <Spinner color='white' />
          })
          console.log('test')
        }
        if (this.props.login.isLoading === true) {
          this.setState({
            isLoading: this.state.isLoading,
            content: this.state.content = <Text syle={{ color: 'white' }}> Berikutnya </Text>
          })
        }
        Alert.alert(this.props.login.data.msg)
      }
      console.log(this.props.login)
    }
  }

  render () {
    return (
      <View style={styles.parent}>
        <View style={{ marginTop: 40 }}>
          <Text style={{ color: '#fff', textAlign: 'center', fontSize: 30, fontFamily: 'monospace' }}>
            PayLive
          </Text>
        </View>
        <View>
          <Form style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <IconUser
              name='user' size={40} color='#fff'
              style={styles.inputIcon}
            />
            <View style={{ width: '70%', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <Item floatingLabel style={{ width: '100%', alignItems: 'center' }}>
                <Label style={styles.input}>Nomor Ponsel
                </Label>
                <Input
                  style={{ color: '#fff' }} inputStyle={{ fontSize: 15 }}
                  keyboardType='phone-pad'
                  onChangeText={text => this.setState({ phone: text })}
                  onBlur={() => this.checkphone()}
                  errorStyle={{ color: 'red' }}
                  errorMessage={
                    !this.state.phoneError ? false : 'Silahkan masukan nomor ponsel anda'
                  }
                />
              </Item>
              <TouchableOpacity
                onPress={this.handleLogin}
                style={styles.btnSignIn}
              >
                {this.state.content}
              </TouchableOpacity>
              <Text style={{ color: '#fff', marginTop: 20 }}> ATAU </Text>
              <TouchableOpacity style={styles.btnJoinNow} onPress={this.handleRegister}>
                <Text style={{ color: 'white' }}>JOIN NOW</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginTop: 20 }}>
                <Text style={{ color: 'white' }}>Butuh Bantuan?</Text>
              </TouchableOpacity>
            </View>
          </Form>
        </View>

      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    login: state.Login
  }
}
export default connect(mapStateToProps, { setLogin })(LoginScreen)

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#5f27cd'
  },
  inputIcon: {
    position: 'absolute',
    top: 35,
    left: 20
  },
  input: {
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    color: '#fff',
    justifyContent: 'center'
  },
  btnSignIn: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: 'rgba(0,0,0,0)',
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    marginTop: 30,
    alignItems: 'center'
  },
  btnJoinNow: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#00d2d3',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }

})
