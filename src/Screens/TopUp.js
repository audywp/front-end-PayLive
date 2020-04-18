import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Button, TextInput, StyleSheet } from 'react-native'
import { Header, Card } from 'native-base'
import { ScrollView } from 'react-native-gesture-handler'

class TopUp extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  render () {
    return (
      <View>
        <View style={{ height: '40%' }}>
          <Card style={{ paddingHorizontal: 10, textAlign: 'center' }}>
            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
            Top Up Ke
            </Text>
            <Card style={{ borderRadius: 20, height: '70%' }}>
              <Text style={{ marginTop: 10, paddingLeft: 10 }}>PayLive</Text>
              <Text style={{ marginTop: 10, paddingLeft: 10 }}>Saldo Rp 50000</Text>
            </Card>
          </Card>
        </View>
        <View style={{ }}>
          <Card style={{ paddingHorizontal: 10, textAlign: 'center', paddingVertical: 20 }}>
            <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
            Pilih Nominal Top Up
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
              <Card style={{ height: '100%', width: '30%', borderRadius: 20 }}>
                <Text style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}> Rp 10.000</Text>
              </Card>
              <Card style={{ height: '100%', width: '30%', borderRadius: 20 }}>
                <Text style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}> Rp 10.000</Text>
              </Card>
              <Card style={{ height: '100%', width: '30%', borderRadius: 20 }}>
                <Text style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}> Rp 10.000</Text>
              </Card>
            </View>
            <Text style={{ marginTop: 10, paddingLeft: 10 }}>Atau Masukkan nominal Top Up disini</Text>
            <TextInput
              placeholder='Minimal Rp 10.000'
              style={styles.input}
            />
            <TouchableOpacity style={styles.btnJoinNow}>
              <Text style={{ color: 'white' }}>Top Up Sekarang</Text>
            </TouchableOpacity>
          </Card>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.15)',
    color: 'rgba(255, 255, 255, 0.9)'
  },
  btnJoinNow: {
    height: 45,
    borderRadius: 25,
    backgroundColor: '#00d2d3',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default TopUp
