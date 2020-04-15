import React, { Component } from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { Form, Item, Input, Label } from 'native-base';
import IconUser from 'react-native-vector-icons/EvilIcons'



const { width: WIDTH } = Dimensions.get('window')
export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <View style={{ marginTop: 40 }} >
          <Text style={{ color: '#fff', textAlign: 'center', fontSize: 30, fontFamily: 'monospace' }} >
            PayLive
          </Text>
        </View>
        <View>
          <Form style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <IconUser name='user' size={40} color='#fff'
              style={styles.inputIcon} />
            <View style={{ width: '70%', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
              <Item floatingLabel style={{ width: '100%', alignItems: 'center' }}>
                <Label style={styles.input} >Nomor Ponsel</Label>
                <Input style={{ color: '#fff' }} />
              </Item>
              <TouchableOpacity style={styles.btnSignIn}>
                <Text style={{ color: 'white' }}>SIGN IN</Text>
              </TouchableOpacity>
              <Text style={{ color: '#fff', marginTop: 20 }}> ATAU </Text>
              <TouchableOpacity style={styles.btnJoinNow}>
                <Text style={{ color: 'white' }}>JOIN NOW</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ marginTop: 20 }}>
                <Text style={{ color: 'white' }}>Butuh Bantuan?</Text>
              </TouchableOpacity>
            </View>
          </Form>
        </View>

      </View >
    )
  }
}

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
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnJoinNow: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#00d2d3',
    justifyContent: 'center',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },


})


