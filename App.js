import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createBottomTabNavigator} from 'react-navigation'

class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Text>hi josh!</Text>
    </View>
  );
  }
}

export default createBottomTabNavigator({
  Explore: {

  },
  Saved: {

  },
  Trips: {

  },
  Inbox: {
    
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
