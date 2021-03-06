import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import BookDonateScreen from '../screens/DonateScreen';
import BookRequestScreen from '../screens/RequestScreen';



export const BottomTabNavigator = createBottomTabNavigator({
  DonateBooks : {
    screen: BookDonateScreen,
    navigationOptions :{
      tabBarLabel : "Donate Books",
    }
  },
  BookRequest: {
    screen: BookRequestScreen,
    navigationOptions :{
      tabBarLabel : "Book Request",
    }
  }
});
