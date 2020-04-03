import React, { Component } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Movies from '../screens/Movies';
import Favs from '../screens/Favs';
import Search from '../screens/Search';
import TV from '../screens/TV';

const Tabs = createBottomTabNavigator()

export default () => (
    <Tabs.Navigator>
        <Tabs.Screen name="Movies" component={Movies}/>
        <Tabs.Screen name="Favs" component={Favs}/>
        <Tabs.Screen name="Search" component={Search}/>
        <Tabs.Screen name="TV" component={TV}/>
    </Tabs.Navigator>
)