import React, { Component } from 'react'
import { Avatar, Input } from 'react-native-elements'
import ImagePicker from 'react-native-image-picker';
import { TouchableOpacity, Dimensions} from 'react-native'
import axios from 'axios'
import Icon from 'react-native-vector-icons/AntDesign'
import Iconedit from 'react-native-vector-icons/MaterialIcons'
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput
} from "react-native";
// import {updateProfile} from './'
// import {connect} from 'react-redux'

const { width: WIDTH } = Dimensions.get('window')

class EditProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      picture: '',
      upload: false,
      modalVisible: false
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

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  render () {
    const { modalVisible } = this.state;
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
              inputStyle={{ fontSize: 15 }}
              placeholder='Ainaya'
              placeholderTextColor='black'
              label='Nama Lengkap'
              labelStyle={{ color: 'black', fontSize: 12 }}
            />
            <TouchableOpacity style={{ width: '100%', paddingHorizontal: 10 }} onPress={() => {
                this.setModalVisible(true);
              }}>
            <Input
              
              rightIcon={<Iconedit name='edit' size={30} color='grey' />}
              inputStyle={{ fontSize: 15 }}
              placeholder='085876927639'
              placeholderTextColor='black'
              label='Nomor Ponsel'
              labelStyle={{ color: 'black', fontSize: 12 }}
            />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={this.props.navigation.navigate('Ubah Email')}>
             <Input
              rightIcon={<Iconedit name='edit' size={30} color='grey' />}
              inputStyle={{ fontSize: 15 }}
              placeholder='ainayass@gmail.com'
              placeholderTextColor='black'
              label='Email'
              labelStyle={{ color: 'black', fontSize: 12 }}
            />
</TouchableOpacity>

            <TouchableOpacity style={styles.btnJoinNow} onPress={this.submitData}>
              <Text style={{ color: 'white' }}>SIMPAN</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalText}>
              <Text>
                Apakah Anda yakin ingin mengubah nomor ponsel?
              </Text>
              <Text>
                Pengubahan nomor ponsel akan memutuskan koneksi PayLive dengan aplikasi partner
              </Text>
              <Text>
                Untuk menghubungkan kembali, silahkan aktivasi ulang di aplikasi partner
              </Text>
              </View>

              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                onPress={() => {
                  this.setModalVisible(!modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Tutup</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
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
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    height: 200,
    width: 330,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});


const mapStateToProps = (state) => ({
  profile: state.profile.profile
})

// export default connect(mapStateToProps, {updateProfile})(EditProfile)
export default EditProfile
