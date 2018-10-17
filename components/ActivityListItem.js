import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'
import Swipeout from 'react-native-swipeout'
import { ListItem, Icon } from 'react-native-elements'
import { doActivity, deleteActivity } from '../actions'
import { RemoveActivityButton } from './RemoveButtons'

export function ActivityListItem ({id, title, data, increment, doThisActivity, removeActivity, navigation}) {
  const swipeoutBtns = [
    {
      component: RemoveActivityButton,
      onPress: ()=>{ removeActivity()},
      type: 'delete',
      underlayColor: 'rgba(209,26,42,.9)',
    }
  ]

  const listItemTitle = (
    <View style={styles.titleRow}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity>
        <Icon
          containerStyle={styles.infoIconContainer}
          iconStyle={styles.infoIcon}
          name='info-circle'
          type='font-awesome'
          reverse
          underlayColor='#aeaeae'
          onPress={() => navigation.navigate('DoingsList', { activityId: id, activityTitle: title })}
        />
      </TouchableOpacity>
    </View>
  )

  return (
    <Swipeout backgroundColor='#fff' buttonWidth={100} right={swipeoutBtns}>
      <ListItem
        title={listItemTitle}
        containerStyle={styles.row}
        titleStyle={styles.title}
        subtitle={timesDone(data, increment)}
        rightIcon={{ name: 'plus', type: 'font-awesome' }}
        onPressRightIcon={doThisActivity}
      />
    </Swipeout>
  )
}

function dateFromDaysAgoToday(daysAgo) {
  return new Date(new Date().setDate(new Date().getDate()-daysAgo))
}

function lastDone(data) {
  const d = new Date(data.slice(-1)[0])
  const today = new Date()
  const lastDone = Math.floor((today - d)/1000/60/60/24)
  return `Last done ${lastDone} days ago`
}

function timesDone(data, daysAgo) {
  if (data.length === 0) return 'None yet done'

  const dateAgo = dateFromDaysAgoToday(daysAgo)
  datesDoneInIncrement = data.filter((date) => { 
    if (new Date(date) > dateAgo) return date
  })

  if (datesDoneInIncrement.length > 1) {
    return `Done ${datesDoneInIncrement.length} times in last ${daysAgo} days`
  } else if (datesDoneInIncrement.length > 0) {
    return `Done once in last ${daysAgo} days`
  } else {
    return lastDone(data)
  }
}

const styles = StyleSheet.create({
  row: {
    height: 100,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    marginLeft: 15,
  },
  infoIconContainer: {
    marginLeft: 15,
    backgroundColor: 'transparent',
    borderColor: 'gray',
    borderWidth: 1,
    height: 25,
    width: 25,
  },
  infoIcon: {
    fontSize: 14,
    color: 'gray'
  }
})

function mapDispatchToProps(dispatch, ownProps) {
  const id = ownProps.id
  const time = new Date().toISOString()
  return {
    doThisActivity: ()=>dispatch(doActivity(id, time)),
    removeActivity: ()=>dispatch(deleteActivity(id))
  }
}

export default connect(null, mapDispatchToProps)(ActivityListItem)