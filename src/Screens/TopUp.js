import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native'
import { Card } from 'native-base'
import { topUp } from '../Redux/Actions/TopUp'
import { getUser } from '../Redux/Actions/ActionsUser'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'

class TopUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      balance: null,
      idUser: ''
    }
    this.onSubmit = async e => {
      e.preventDefault()
      const idUser = this.state.idUser
      const data = {
        balance: this.state.balance
      }
      await this.props.topUp(idUser, data)
      await this.props.getUser(idUser)
      await this.props.navigation.navigate('Home')
    }
  }

  componentDidMount () {
    this.getId()
  }

  async getId () {
    try {
      const setIdUser = await AsyncStorage.getItem('id_user')
      this.setState({
        idUser: setIdUser // 26
      })
    } catch (err) {
      console.log(err)
    }
  }

  render () {
    console.log(this.state.balance)
    console.log('id', this.state.idUser)
    const { usersdetails } = this.props.profile
    return (
      <View>
        <View style={{ height: '30%' }}>
          <Card style={{ padding: 10, textAlign: 'center' }}>
            <Text style={{ marginBottom: 15, fontSize: 17, fontWeight: 'bold' }}>
            Top Up Ke
            </Text>
            <Card style={{ borderRadius: 20, height: '70%' }}>
              <Text style={{ marginTop: 10, paddingLeft: 10 }}>PayLive</Text>
              <Text style={{ marginTop: 10, paddingLeft: 10 }}>Saldo Rp {usersdetails && usersdetails.cash}</Text>
            </Card>
          </Card>
        </View>
        <ScrollView style={{ height: '70%' }}>
          <Card style={{ paddingHorizontal: 10, textAlign: 'center', paddingVertical: 20 }}>
            <Text style={{ marginBottom: 15, fontSize: 17, fontWeight: 'bold' }}>
            Pilih Nominal Top Up
            </Text>
            <View style={{ marginBottom: 15, flexDirection: 'row', justifyContent: 'space-around' }}>
              <TouchableOpacity
                onPress={() => this.setState({
                  balance: '10.000'
                })}
              >
                <Text style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}> Rp 10.000</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({
                  balance: '50.000'
                })}
              >
                <Text style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}> Rp 50.000</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({
                  balance: '100.000'
                })}
              >
                <Text style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}> Rp 100.000</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ marginBottom: 15, marginTop: 10, paddingLeft: 10 }}>Atau Masukkan nominal Top Up disini</Text>
            <TextInput
              placeholder='Minimal Rp 10.000'
              value={this.state.balance}
              keyboardType='phone-pad'
              style={styles.input}
              onChangeText={(text) => this.setState({ balance: text })}
            />
            <TouchableOpacity style={styles.btnJoinNow} onPress={this.onSubmit}>
              <Text style={{ color: 'white' }}>Top Up Sekarang</Text>
            </TouchableOpacity>
          </Card>

        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    fontSize: 16,
    paddingLeft: 45,
    borderBottomColor: '#aaa',
    color: 'black'
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

const mapStateToProps = (state) => {
  return {
    // topUp: state.TopUp,
    profile: state.UserDetails
  }
}

export default connect(mapStateToProps, { topUp, getUser })(TopUp)
