import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ListScreen from '../Drawer/Lists';
import {BookmarkStack} from './mainStack';
import BottomTabNavigator from '../navigation/bottomStack';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () =>{
    return(
        <Drawer.Navigator>
           <Drawer.Screen name='Home' component={BottomTabNavigator}/>
           <Drawer.Screen name='List' component={ListScreen}/>
           <Drawer.Screen name='Bookmark' component={BookmarkStack}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigation;