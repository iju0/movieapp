import React, { useEffect, useLayoutEffect } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Movies from '../screens/Movies';
import Favs from '../screens/Favs';
import Search from '../screens/Search';
import TV from '../screens/TV';

const Tabs = createBottomTabNavigator()

// const getHeaderName = route =>
//     route?.state?.routeName[route.state.index] || 'Movies'

const getHeaderName = route =>
    route?.state?.routeNames[route.state.index] || "Movies";


export default ({navigation, route}) => {

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         title : getHeaderName(route)
    //     })
    // }, [route])

    useLayoutEffect(() => {
        navigation.setOptions({
            title: getHeaderName(route)
        });
    }, [route]);

    return (
        <Tabs.Navigator>
            <Tabs.Screen name="Movies" component={Movies}/>
            <Tabs.Screen name="Favs" component={Favs}/>
            <Tabs.Screen name="Search" component={Search}/>
            <Tabs.Screen name="TV" component={TV}/>
        </Tabs.Navigator>
    )

}

