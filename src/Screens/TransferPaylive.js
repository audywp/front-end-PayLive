import React, { Component } from 'react'
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  TextInput
} from 'react-native'
import { connect } from 'react-redux'
import { TransferPaylive } from '../Redux/Actions/TransferPaylive'
import { getUser } from '../Redux/Actions/ActionsUser'
import AsyncStorage from '@react-native-community/async-storage'

const { width: WIDTH } = Dimensions.get('window')
const mapStateToProps = state => {
  return {
    transfer: state.TransferPaylive,
    user: state.UserDetails
  }
}

export default connect(mapStateToProps, { TransferPaylive, getUser })(class Transfer extends Component {
  constructor(props){
    super(props)
    this.state = {
      phone : '',
      amount: '',
      content: <Text style={{ color: 'white' }}>Transfer</Text>
    }
    
  }
  transferPay = async () => {
    const id = await AsyncStorage.getItem('id_user')
    const data = {
      phone: this.state.phone,
      amount: this.state.amount
    }
    
    this.props.TransferPaylive(id, data).then(()=>{
        this.props.getUser(id)
        this.props.navigation.navigate('Konfirmasi Transfer')
    })
    if (!this.props.transfer.isLoading) {
      this.setState({
        content: <Spinner color='white' />
      })
    }
  }

  componentDidMount = async () => {
    const id = await AsyncStorage.getItem('id_user')
    try {
      this.props.getUser(id)
    } catch (error) {
      console.log(error)
    }
  }
  render () {
    const { amount, phone } = this.state
    console.log(amount, phone)
    return (
      <View>
        <View style={{
            backgroundColor: '#4a2d8b',
            height: '10%',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 10
          }}>
          <Text style={{ color: '#fff', alignSelf: 'center' }}>
            Saldo anda : {this.props.user && this.props.user.usersdetails.cash}
          </Text>
        </View>
        <View style={styles.container}>
          <Text
            style={{
              marginBottom: 20,
              fontSize: 18,
              fontFamily: 'Roboto'
            }}
          >Transfer</Text>
          <View>
            <Text>Nomor Handphone</Text>
            <TextInput
              style={styles.input}
              placeholder='Nomor Handphone'
              keyboardType='phone-pad'
              maxLength={12}
              onChangeText = {(text) => this.setState({phone: text})}
            />
          </View>
        </View>
        <View style={styles.container}>
          <View>
            <Text>Nominal</Text>
            <TextInput
              style={styles.input}
              placeholder='Rp 10000'
              keyboardType='phone-pad'
              maxLength={7}
              onChangeText={(amount) => this.setState({ amount: amount })}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={this.transferPay}
        >
          {this.state.content}
        </TouchableOpacity>
      </View>
    )
  }
})

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
    paddingHorizontal: 10
  }
})
