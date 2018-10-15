import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { addActivity } from '../actions'
import { FormInput, FormLabel, Button } from 'react-native-elements'
import { havelockBlue } from '../colors'


export class AddActivity extends Component {
  static navigationOptions = {
    title: 'Add Activity',
    headerStyle: {
      backgroundColor: havelockBlue,
    },
  }

  state = {
    title: ''
  }

  submit = () => {
    this.props.dispatch(
      addActivity({
        title: this.state.title,
        id: new Date().toISOString()
      })
    )
    this.props.navigation.navigate('ActivityList')
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <FormLabel>Activity Name</FormLabel>
          <FormInput 
            placeholder='Exercise' 
            onChangeText={(title)=>this.setState({title})}
          />
        </View>
        <TouchableOpacity style={styles.addActivity}>
          <Button 
            onPress={this.submit}
            rightIcon={{name: 'plus', type: 'font-awesome'}}
            title="Add Activity"
            backgroundColor={havelockBlue}
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


export default connect()(AddActivity)