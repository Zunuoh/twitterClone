import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from '../screens/Homecreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationsScreen from '../screens/NotificationScreen';
import MessageScreen from '../screens/MessageScreen';
import MomentScreen from '../Drawer/Moments';

import { MainStackNavigator, BookmarkStack } from "../navigation/mainStack";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Search" component={MomentScreen} />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Message" component={MessageScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;