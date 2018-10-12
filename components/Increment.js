import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import Swipeout from 'react-native-swipeout'
import { connect } from 'react-redux'
import { deleteIncrement } from  '../actions'

export function Increment ({id,alias, onPress, dispatch}) {
  const swipeoutBtns = [
    {
      text: 'Delete Increment',
      onPress: ()=>{ dispatch(
        deleteIncrement(id)
      )}
    }
  ]

  return (
    <Swipeout right={swipeoutBtns}>
      <View style={styles.row}>
        <Text style={styles.alias}>{alias}</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <FontAwesome style={{textAlign: 'center'}} name='check' size={30} />
        </TouchableOpacity>
      </View>
    </Swipeout>
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

export default connect()(Increment)