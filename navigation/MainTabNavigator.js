import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import ChatScreen from '../screens/ChatScreen';
import CallScreen from '../screens/CallScreen';
import MoreScreen from '../screens/MoreScreen';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const ChatStack = createStackNavigator(
  {
    Chat: ChatScreen,
  },
  config
);

ChatStack.navigationOptions = {
  tabBarLabel: 'Chat',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'android'
          ? `ios-chatboxes` : 'ios-home'
      }
    />
  ),
};

ChatStack.path = '';

const CallStack = createStackNavigator(
  {
    Calls: CallScreen,
  },
  config
);

CallStack.navigationOptions = {
  tabBarLabel: 'Calls',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'android' ? 'md-call' : 'ios-phone'} />
  ),
};

CallStack.path = '';

const MoreStack = createStackNavigator(
  {
    More: MoreScreen,
  },
  config
);

MoreStack.navigationOptions = {
  tabBarLabel: 'More',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'android' ? 'ios-more' : 'ios-more'} />
  ),
};

MoreStack.path = '';

const tabNavigator = createBottomTabNavigator({
  ChatStack,
  CallStack,
  MoreStack,
});

tabNavigator.path = '';

export default tabNavigator;
