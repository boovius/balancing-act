import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

export default function Increment ({alias, onPress}) {
  return (
    <View style={styles.row}>
      <Text style={styles.alias}>{alias}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <FontAwesome style={{textAlign: 'center'}} name='check' size={30} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    height: 100,
    borderBottomColor: 'gray',
    borderBottomWidth: 10,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'gray',
    height: 50,
    width: 50,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  alias: {
    fontSize: 30
  }
})
