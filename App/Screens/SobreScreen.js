import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Colors from '../Colors'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Sobre',
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTitleStyle: {
      color: Colors.white
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sobre o aplicativo:</Text>
        <Text style={styles.text}>Este aplicativo é para os alunos compartilharem fotos relevantes entre si. Que irão aparecer no painel da escola.</Text>
        <Text style={styles.title}>Política de Privacidade:</Text>
        <Text style={styles.text}>O conteúdo compartilhado é de respnsábilidade dos usuário do aplicativo.</Text>
        <Text style={styles.text}>As fotos aqui compartilhadas são armazenadas em nosso servidor.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    padding: 15
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    color: Colors.grey
  },
  text: {
    color: Colors.grey
  },
})

