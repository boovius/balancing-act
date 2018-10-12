import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { doActivity } from '../actions'

export function Activity ({title, data, increment, doThisActivity}) {
  return (
    <View style={styles.row}>
      <View style={styles.topRow}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.button} onPress={doThisActivity}>
          <FontAwesome style={{textAlign: 'center'}} name='plus' size={30} />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomRow}>
        <Text>{timesDone(data, increment)}</Text>
      </View>
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
    flexDirection: 'row',
    justifyContent: 'center',
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

function mapDispatchToProps(dispatch, ownProps) {
  const id = ownProps.id
  const time = new Date().toISOString()
  return {
    doThisActivity: ()=>dispatch(doActivity(id, time))
  }
}

export default connect(null, mapDispatchToProps)(Activity)