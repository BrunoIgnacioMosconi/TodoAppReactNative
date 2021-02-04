import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={this.props.changeText}
          placeholder={'To do'}
          onSubmitEditing={this.props.add}
          value={this.props.text}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
  },
  textInput: {
    paddingHorizontal: 10,
    fontSize: 24,
  }
});

export default Header;
