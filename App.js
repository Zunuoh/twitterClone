import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/Homecreen';
import SearchScreen from './src/screens/SearchScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import MessageScreen from './src/screens/MessageScreen';
import SettingsScreen from './src/Drawer/Settings';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {Feather} from '@expo/vector-icons';
import {MainStackNavigator} from './src/navigation/mainStack';
import BottomTabNavigator from './src/navigation/bottomStack';
import DrawerNavigation from './src/navigation/drawerNavigation';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// const MainSectionTab = () =>{
//   return(
//     <Tab.Navigator  tabBarOptions={{
//       // activeBackgroundColor:"#110c11",
//       // inactiveBackgroundColor:"#110c11",
//       activeTintColor: '#000',
//       inactiveTintColor: '#ccc',
//     }} >
//     <Tab.Screen name ="Home" component={HomeScreen} options={{
//           tabBarIcon: ({color,size})=> (
//             <Feather name="home" color="black" size={24}/>
//             )
//         }}/>
//     <Tab.Screen name="Search" component={SearchScreen} options={{
//           tabBarIcon: ({focused})=> (
//             <Feather name="search" color="black" size={24}/>
//             )
//         }}/>
//     <Tab.Screen name="Notification" component={NotificationScreen}  options={{
//         tabBarIcon: ({focused})=> (
//           <Feather name="bell" color="black" size={24}/>
//           )
//       }}/>
//       <Tab.Screen name="Message" component={MessageScreen} options={{
//         tabBarIcon: ({focused})=> (
//           <Feather name="mail" color="black" size={24}/>
//           )
//       }}/>
        
//     </Tab.Navigator>
//   )
// }
export default function App() {
  return (
    <NavigationContainer>
     <DrawerNavigation/>
    </NavigationContainer>
   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
