import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableHighlight
} from 'react-native';

var mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 39,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  }
})

class Main extends React.Component {
  render() {
    return (
      <View style={mainStyle.container}>
        {console.log("it's been called")}
        <Text> Testing the Router </Text>
      </View>
    )
  }
}

module.exports = Main