import React, { Component } from 'react'
import { Header, Avatar, Badge } from 'react-native-elements'
import { View, Text } from 'native-base'
class HeaderComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <View style={{ backgroundColor: '#4a2d8b', height: 200, borderRadius: 70 }}>
        <Header
          placement='left'
          leftComponent={{ style: { fontSize: 36, fontFamily: 'Caladea-Regular', color: '#fff' }, text: 'PayLive', color: '#fff' }}
          rightComponent={
            <View>
              <Avatar
                size='medium'
                icon={{ name: 'bell', type: 'font-awesome' }}
                overlayContainerStyle={{ marginLeft: 25, backgroundColor: 'rgba(0,0,0,0)' }}
              />
              <Badge
                status='error'
                containerStyle={{ position: 'absolute', top: 12, left: 40 }}
              />
            </View>
          }
          containerStyle={{
            backgroundColor: '#4a2d8b',
            height: 68,
            borderColor: '#4a2d8b',
            borderBottomWidth: 0
          }}
        />
        <View>
          <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
            <Text style={{ marginBottom: 9, fontSize: 18, fontFamily: 'Caladea-Regular', color: '#fff' }}>PayLive Cash</Text>
            <View style={{ marginBottom: 7, flexDirection: 'row', color: '#fff' }}>
              <Text style={{ fontFamily: 'Caladea-Regular', fontSize: 22, marginRight: 10, color: '#fff' }}>Rp</Text>
              <Text style={{ fontFamily: 'Caladea-Regular', fontSize: 40, marginRight: 10, color: '#fff' }}>150.000</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ marginRight: 10, fontSize: 18, fontFamily: 'Caladea-Regular', color: '#fff' }}>PayLive Points</Text>
              <Text style={{ fontSize: 18, fontFamily: 'Caladea-Regular', color: '#F7C738' }}>2.847</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default HeaderComponent
