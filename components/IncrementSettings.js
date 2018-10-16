import React from 'react'
import { View, Text, Switch } from 'react-native'
import { connect } from 'react-redux'

export function IncrementSettings ({increment}) {
  return (
    <View>
      <Text>{increment.alias}</Text>
      <Switch />
    </View>
  )
}

function mapStateToProps(state, {navigation}) {
  const { incrementId } = navigation.state.params
  debugger;
  return {
    increment: state.increments.find(increment => increment.id === incrementId)
  }
}

export default connect()(IncrementSettings)