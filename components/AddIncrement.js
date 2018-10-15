import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addIncrement } from '../actions'
import { FormInput, FormLabel, Button } from 'react-native-elements'


export class AddIncrement extends Component {
  static navigationOptions = {
    title: 'Add Increment',
    headerStyle: {
      backgroundColor: '#e2c544',
    },
  }

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
      <View style={styles.container}>
        <View>
          <FormLabel>How many days?</FormLabel>
          <FormInput 
            keyboardType='numeric'
            placeholder='7' 
            onChangeText={(days)=>this.setState({days})}
          />
          <FormLabel>What you want to call it</FormLabel>
          <FormInput 
            placeholder='One Week' 
            onChangeText={(days)=>this.setState({days})}
          />
        </View>
        <TouchableOpacity style={styles.addIncrement}>
          <Button 
            onPress={this.submit}
            rightIcon={{name: 'plus', type: 'font-awesome'}}
            title="Add Increment"
            backgroundColor='#e2c544'
            color='#000'
            raised
          />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 15,
  },
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