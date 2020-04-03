import React, { Component } from 'react';
import { createStackNavigator} from '@react-navigation/stack'
import Tabs from '../navigation/Tabs'


const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator>
        <Stack.Screen name="Tab" component={Tabs}/>
    </Stack.Navigator>
)