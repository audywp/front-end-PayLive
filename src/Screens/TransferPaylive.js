import React, { Component } from 'react'
import { View, Text, Dimensions, TouchableOpacity, StyleSheet, TextInput } from 'react-native'

const { width: WIDTH } = Dimensions.get('window')

export default class TransferPaylive extends Component {
  render () {
    return (
      <View>
        <View style={{ backgroundColor: 'black', height: '10%' }}>
          <Text style={{ color: '#fff', alignSelf: 'center' }}>
            Saldo Paylive Cash : Rp 10.000
          </Text>
        </View>
        <View style={styles.container}>
          <View>
            <Text>Nomor Handphone</Text>
            <TextInput
              style={styles.input} placeholder='Nomor Handphone'
              keyboardType='phone-pad'
            />
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <Text>Nominal</Text>
            <TextInput
              style={styles.input} placeholder='Rp 10000'
              keyboardType='phone-pad'
            />
          </View>
        </View>
        <TouchableOpacity style={styles.btn} onPress={this.props.navigation.navigate('Konfirmasi Transfer')}>
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
    alignSelf: 'center',
    width: '100%',
    paddingHorizontal: 10
  }
})
