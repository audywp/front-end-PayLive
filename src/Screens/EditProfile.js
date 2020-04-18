import React, { Component } from 'react'
import { Avatar, Input } from 'react-native-elements'
import ImagePicker from 'react-native-image-picker';
import { TouchableOpacity, Dimensions, StyleSheet, View, Text } from 'react-native'
import axios from 'axios'
import Icon from 'react-native-vector-icons/AntDesign'
// import {updateProfile} from './'
// import {connect} from 'react-redux'

const { width: WIDTH } = Dimensions.get('window')

class EditProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      picture: '',
      upload: false
    }
    this.submitData = (e) => {
      e.preventDefault()
      console.log(this.props.profile)
      const data = new FormData()
      const File = {
        uri: this.state.picture.uri,
        name: this.state.picture.fileName,
        type: 'image/jpeg',
        size: this.state.fileSize
      }
      data.append('picture', File)
      data.append('phone', '085876927657')
      data.append('fullname', 'Ayako')
      data.append('email', 'kobayashi@gmail.com')

      const bodyFormData = {
        // method: 'patch',
        body: data,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data'
        }
      }

      // this.props.updateProfile(7, data)
    }
  }

    handleChoosePhoto = () => {
      const options = {
          quality: 0.7,
          mediaType: 'photo',
          noData: true,
          storageOptions: {
              path: 'images',
              cameraRoll: true,
          },
      };
      ImagePicker.showImagePicker(options, response => {
          if (response.error) {
              console.log(error);
          } else if (!response.didCancel) {
              this.setState(
                  {
                      upload: true,
                      picture: response
                  }
              );
          }
      });
  };
  render () {
    return (
      <View>
        <View style={{ marginTop: 40 }}>
          <View style={{ marginBottom: 20, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={this.handleChoosePhoto}>
              {this.state.picture ? (
                <Avatar
                  size='large'
                  rounded
                  source={{
                    uri:
                    this.state.picture.uri
                  }}
                  showEditButton
                />
              ) : (
                <Avatar
                  size='large'
                  rounded
                  containerStyle={{ alignSelf: 'center' }}
                  source={{
                    uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
                  }}
                  showEditButton
                />
              )}
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'center', justifyContent: 'space-around' }}>
            <Input
              rightIcon={<Icon name='user' size={30} color='red' />}
              inputStyle={{ fontSize: 15 }}
              label='Nama Lengkap'
              labelStyle={{ color: 'black', fontSize: 12 }}
            />
            <TouchableOpacity style={styles.btnJoinNow} onPress={this.submitData}>
              <Text style={{ color: 'white' }}>SIMPAN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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

const mapStateToProps = (state) => ({
  profile: state.profile.profile
})

// export default connect(mapStateToProps, {updateProfile})(EditProfile)
export default EditProfile
