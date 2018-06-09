import React from 'react'
import {Image, View, Text, StyleSheet} from 'react-native'
import Images from '../Images'
import MenuItem from '../Components/MenuItem'
import Colors from '../Colors'
import ImagePicker from 'react-native-image-picker'

const imagePickerOptions = {
  title: 'Escolher Foto',
  cancelButtonTitle: 'Cancelar',
  takePhotoButtonTitle: 'Tirar Foto',
  chooseFromLibraryButtonTitle: 'Da Biblioteca',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Painel de Fotos',
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTitleStyle: {
      color: Colors.white
    }
  }

  showImagePicker = () => {
    ImagePicker.showImagePicker(imagePickerOptions, response => {
      if (response.didCancel) {
        return
      }
      if (response.error) {
        return alert(response.error)
      }
      this.setState({photo: {uri: response.uri}})
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.colagemContainer}>
            <Image
              source={Images.colagem}
              style={styles.colagem}/>
        </View>
        <View style={styles.menuContainer}>
          <MenuItem
            onPress={this.showImagePicker}
            icon='photo'
            text='Enviar Foto'/>
          <MenuItem
            onPress={() => this.props.navigation.navigate('sobre')}
            icon='message'
            text='Sobre'/>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  colagemContainer: {
    flex: 1.6,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  colagem: {
    height: 200,
    width: 200,
  },
  menuContainer: {
    marginTop: 40,
    padding: 20,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
})
