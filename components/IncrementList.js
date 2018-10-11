import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import Increment from './Increment'

export default function IncrementList ({increments, onPress}) {
  return (
      <View>
        <Text style={styles.title}>Increments</Text>
        <FlatList
          data={increments}
          renderItem={({ item })=>(
            <Increment onPress={()=>{}} {...item}
            />
          )}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 30,
  }
})