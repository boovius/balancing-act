import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addIncrement } from '../actions'

export class AddIncrement extends Component {
  state = {
    days: null,
    alias: ''
  }

  submit = () => {
    this.props.dispatch(
      addIncrement({
        ...this.state,
        days: parseInt(this.state.days),
        id: new Date().toISOString()
      })
    )
    this.props.navigation.navigate('IncrementList')
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Add Increment</Text>
        <TextInput 
          keyboardType='numeric'
          value={this.state.days}
          placeholder='days' 
          onChangeText={(days)=>this.setState({days})}
          style={styles.numberInput}
        />
        <TextInput 
          value={this.state.alias}
          placeholder='days' 
          onChangeText={(alias)=>this.setState({alias})}
          style={styles.nameInput}
        />
        <TouchableOpacity onPress={this.submit}><Text>Submit</Text></TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30
  },
  numberInput: {
    fontSize: 18
  },
  nameInput: {
    fontSize: 18
  },
})


export default connect()(AddIncrement)