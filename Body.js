import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import Task from './Task'
class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.isFetching &&
          <ActivityIndicator
            size='large'
            color='#640064'
          />
        }
        {!this.props.isFetching &&
          <FlatList
            data={this.props.tasks}
            renderItem={({ item }) => <Task item={item} delete={this.props.delete} />}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
  },
});

export default Body
