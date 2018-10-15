import React from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux'
import { doActivity } from '../actions'
import { ListItem } from 'react-native-elements'

export function ActivityListItem ({title, data, increment, doThisActivity}) {
  return (
    <View style={styles.row}>
      <ListItem
        title={title}
        titleStyle={styles.title}
        subtitle={timesDone(data, increment)}
        rightIcon={{name: 'plus', type: 'font-awesome'}}
        onPressRightIcon={doThisActivity}
      />
    </View>
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
  title: {
    fontSize: 30
  }
})

function mapDispatchToProps(dispatch, ownProps) {
  const id = ownProps.id
  const time = new Date().toISOString()
  return {
    doThisActivity: ()=>dispatch(doActivity(id, time))
  }
}

export default connect(null, mapDispatchToProps)(ActivityListItem)