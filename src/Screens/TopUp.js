import React, { Component } from 'react'
import { Header } from 'react-native-elements'
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native'

class TopUp extends Component {
  constructor (props) {
    super(props)
    this.state = { }
  }

  render () {
    return (
      <View>
        <Header
          leftComponent={<MyCustomLeftComponent />}
          centerComponent={<MyCustomCenterComponent />}
          rightComponent={<MyCustomRightComponent />}
        />
        <View>
          <Card>
            <Text style={{ marginBottom: 10 }}>
            Masukan nominal top up disini
            </Text>
            <TextInput placeholder='Rp' />
            <TouchableOpacity onPress={this.changeScreenToAccount}>
              <Button
                containerStyle={{ backgroundColor: '529B77' }}
                buttonStyle={{ borderRadius: 40, marginLeft: 0, marginRight: 0, marginBottom: 0, color: '#529B77' }}
                title='Top Up Sekarang'
              />
            </TouchableOpacity>

          </Card>
        </View>
      </View>
    )
  }
}

export default TopUp
