import React, { Component } from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default class GreetingUser extends Component {
  render() {
    return (
      <View style={styles.parents}>
        <Text style={{fontFamily: 'monospace', textAlign: 'center', marginTop: 18, fontSize: 40, color:'#fff'}} >
            PayLive
          </Text>
          <Card
            image={require('../assets/pay.jpeg')}>
            <Text style={{marginBottom: 10}}>
              Kini transaksi lebih mudah dengan PayLive 
            </Text>
          </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  parents : {
    flex: 1,
    backgroundColor: '#5f27cd'
  }
})