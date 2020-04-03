import React, {useLayoutEffect } from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Movies from '../screens/Movies';
import Favs from '../screens/Favs';
import Search from '../screens/Search';
import TV from '../screens/TV';
import {Ionicons} from '@expo/vector-icons';
import {Platform} from 'react-native'

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
        <Tabs.Navigator
            screenOptions={({route}) => ({
                tabBarIcon : ({focused}) => {
                    let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';
                    if (route.name === 'Movies') {
                        iconName += 'film'
                    } else if (route.name === 'TV') {
                        iconName += 'tv'
                    } else if (route.name === 'Search') {
                        iconName += 'search'
                    } else if (route.name === 'Favs') {
                        iconName += 'heart'
                    }

                    return (
                        <Ionicons 
                            name={iconName}
                            color={focused ? 'white' : 'gray'}
                            size={26}
                        />
                    )
                }
            })}
        
            tabBarOptions={{
                showLabel : true,
                style : {
                    backgroundColor : 'black',
                    borderTopColor : 'black'
                }
            }}
        
        >
            <Tabs.Screen name="Movies" component={Movies}/>
            <Tabs.Screen name="Favs" component={Favs}/>
            <Tabs.Screen name="Search" component={Search}/>
            <Tabs.Screen name="TV" component={TV}/>
        </Tabs.Navigator>
    )

}

