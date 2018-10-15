import React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements'
import Swipeout from 'react-native-swipeout'
import { connect } from 'react-redux'
import { deleteIncrement } from  '../actions'
import { RemoveIncrementButton } from './RemoveButtons'

export function IncrementListItem ({id, alias, onPress, dispatch}) {
  const swipeoutBtns = [
    {
      component: RemoveIncrementButton,
      onPress: ()=>{ dispatch(
        deleteIncrement(id)
      )},
      type: 'delete',
      underlayColor: 'rgba(209,26,42,.9)',
    }
  ]

  return (
    <Swipeout backgroundColor='#fff' buttonWidth={100} right={swipeoutBtns}>
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
})

export default connect()(IncrementListItem)