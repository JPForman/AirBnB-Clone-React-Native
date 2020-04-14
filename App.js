import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createBottomTabNavigator} from 'react-navigation'

import Explore from './screens/Explore';
import Inbox from './screens/Inbox';
import Saved from './screens/Saved';
import Trips from './screens/Trips';
import Icon from 'react-native-vector-icons/AntDesign';

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
    screen: Explore,
    navigationOptions: {
      tabBarLabel: 'EXPLORE',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="search1" color={tintColor} size={24}/>
      )
    }
  },
  Saved: {
    screen: Saved
    
  },
  Trips: {
    screen: Trips
    
  },
  Inbox: {
    screen: Inbox
    
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
