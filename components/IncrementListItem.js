import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swipeout from 'react-native-swipeout'
import { connect } from 'react-redux'
import { deleteIncrement } from  '../actions'
import { ListItem } from 'react-native-elements'

export function IncrementListItem ({id, alias, onPress, dispatch}) {
  const swipeoutBtns = [
    {
      text: 'Remove',
      component: RemoveBtn,
      onPress: ()=>{ dispatch(
        deleteIncrement(id)
      )},
      type: 'delete',
      underlayColor: 'rgba(209,26,42,.9)',
    }
  ]

  return (
    <Swipeout buttonWidth={100} right={swipeoutBtns}>
      <ListItem
        title={alias}
        wrapperStyle={styles.row}
        onPress={onPress}
        titleStyle={styles.title}
        underlayColor='rgba(249,249,249,.9)'
      />
    </Swipeout>
  )
}

const styles = StyleSheet.create({
  row: {
    height: 100,
  },
  title: {
    fontSize: 24,
  },
  removeBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  removeBtnText: {
    color: '#fff',
    fontSize: 16
  }
})

const RemoveBtn = (
  <View style={styles.removeBtn}>
    <Text style={styles.removeBtnText}>Remove</Text>
    <Text style={styles.removeBtnText}>Increment</Text>
  </View>
)

export default connect()(IncrementListItem)