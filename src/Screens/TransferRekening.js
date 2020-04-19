import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements'
import { Icon, Picker, Form } from 'native-base'

const { width: WIDTH } = Dimensions.get('window')
class Transfer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: undefined
    }
  }

  onValueChange (value) {
    this.setState({
      selected: value
    })
  }

  render () {
    return (
      <View>
        <View style={{ backgroundColor: 'black', height: '10%' }}>
          <Text style={{ color: '#fff', alignSelf: 'center' }}>
            Saldo Paylive Cash : Rp 10.000
          </Text>
        </View>
        <View>
          <Text>Transfer Ke</Text>
          <Form>
            <Picker
              mode='modal'
              placeholder='Select your SIM'
              iosIcon={<Icon name='arrow-down' />}
              placeholder='Select your SIM'
              textStyle={{ color: '#5cb85c' }}
              itemStyle={{
                backgroundColor: '#d3d3d3',
                marginLeft: 15,
                paddingLeft: 10
              }}
              itemTextStyle={{ color: '#788ad2' }}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >

              <Picker.Item label='Bank BRI' value='key0' />
              <Picker.Item label='Bank Mandiri' value='key1' />
              <Picker.Item label='Bank BNI' value='key2' />
              <Picker.Item label='Bank BCA' value='key3' />
              <Picker.Item label='Bank BCA Syariah' value='key4' />
            </Picker>
          </Form>
        </View>
        <View style={styles.container}>
          <View>
            <Text>Nomor Rekening</Text>
            <TextInput
              style={styles.input} placeholder='Nomor Rekening'
              keyboardType='phone-pad'
            />
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <Text>Pesan (optional)</Text>
            <TextInput
              style={styles.input} placeholder='contoh: dari ayah untuk biaya sekolah'
              keyboardType='phone-pad'
            />
          </View>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={{ color: 'white' }}>Transfer</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 15
  },
  btn: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#00d2d3',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  }

})

export default Transfer
