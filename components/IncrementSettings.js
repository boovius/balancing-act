import React, { Component } from 'react'
import { View, Text, Switch, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { setDefaultIncrement } from '../actions'

export class IncrementSettings extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: navigation.state.params.incrementAlias
    }
  }
  
  toggleDefault = (set) => {
    if (set) {
      this.props.dispatch(
        setDefaultIncrement(this.props.increment.id)
      )
    } else {
      this.props.dispatch(
        setDefaultIncrement(null)
      )
    }
  }

  render() {
    const { isDefault } = this.props
    return (
      <View>
        <View style={styles.setDefault}>
          <Text>Make Default</Text>
          <Switch onValueChange={this.toggleDefault} value={isDefault} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  setDefault: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
  }
})

function mapStateToProps(state, {navigation}) {
  const { incrementId } = navigation.state.params
  return {
    increment: state.increments.find(increment => increment.id === incrementId),
    isDefault: incrementId === state.settings.defaultIncrementId
  }
}

export default connect(mapStateToProps)(IncrementSettings)