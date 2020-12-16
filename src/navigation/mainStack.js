import React, { Fragment } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from '../screens/Homecreen';
import MomentScreen from '../Drawer/Moments';
import BookmarkScreen from '../Drawer/Bookmarks';

const Stack = createStackNavigator();

const MainStackNavigator = () =>{
    return(
        <Stack.Navigator>
            {/* <Stack.Screen name="Moment" component={MomentScreen} options={{headerShown:false}}/> */}
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
           
        </Stack.Navigator>
    )
} 

const BookmarkStack = ()=>{
    return(
        <Stack.Navigator>
        <Stack.Screen name="Bookmarks" component={BookmarkScreen} options={{headerShown:false}}/>
        </Stack.Navigator>   
    )
}

export {MainStackNavigator, BookmarkStack};