import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Colors from '../Colors'

export default function MenuItem({icon, text, onPress}) {
  return (
    <TouchableOpacity 
      onPress={onPress}
      style={styles.container}>
      <Icon style={{marginBottom: 3}} size={24} name={icon} color='white'/>
      {
        text.split(' ').map(word => (
          <Text key={word} style={styles.text}>{word}</Text>
        ))
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: 80,
    backgroundColor: Colors.primary,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    lineHeight: 12,
    fontSize: 12,
    fontWeight: 'bold'
  }
})
