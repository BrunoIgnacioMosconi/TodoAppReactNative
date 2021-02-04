import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Button } from 'react-native';
import Header from './Header'
import Body from './Body'

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      tasks: [],
      text: '',
      isFetching: true,
    }
  }

  componentDidMount() {
    this.getTasks();
  }

  establecerTexto = (value) => {
    this.setState({ text: value });
  }

  addTask = () => {
    const newTasks = [...this.state.tasks, { text: this.state.text, key: Date.now() }]
    this.save(newTasks)

    this.setState({
      tasks: newTasks,
      text: '',
    });
  }

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter((task) => { return task.key !== id })
    this, this.save(newTasks),
      this.setState({
        tasks: newTasks,
      })
  }

  save = (tasks) => {
    AsyncStorage.setItem('@BrunoIgnacioMosconi:tasks', JSON.stringify(tasks))
  }

  getTasks = () => {
    AsyncStorage.getItem('@BrunoIgnacioMosconi:tasks').then((value) => {
      const newTasks = JSON.parse(value)
      this.setState({
        isFetching: false,
      })
      if (value !== null) {
        this.setState({
          tasks: newTasks,
        })
      }
    }).catch((error) => {
      this.setState({
        isFetching: false,
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          text={this.state.text}
          changeText={this.establecerTexto}
          add={this.addTask}
        />
        <Body tasks={this.state.tasks} delete={this.deleteTask} isFetching={this.state.isFetching} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
