import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

export default function Activity ({title, data, increment, onPress}) {
  console.log('data', data)
  return (
    <View style={styles.row}>
      <View style={styles.topRow}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <FontAwesome style={{textAlign: 'center'}} name='plus' size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomRow}>
        <Text>{data.slice(-1)[0]}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  row: {
    height: 100,
    borderBottomColor: 'gray',
    borderBottomWidth: 10,
    justifyContent: 'space-around',
  },
  topRow: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 25,
  },
  bottomRow: {
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
  title: {
    fontSize: 30
  }
})
