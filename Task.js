import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Task extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.item.text}</Text>
        <TouchableOpacity
          onPress={() => { this.props.delete(this.props.item.key) }}
        >
          <Button
            title={'X'}
            color='gray'
          />
        </TouchableOpacity>
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 24,
  },
});

export default Task;
