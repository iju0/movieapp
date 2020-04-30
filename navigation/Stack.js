import React, { Component } from 'react';
import { createStackNavigator} from '@react-navigation/stack'
import Tabs from '../navigation/Tabs'
import Detail from '../screens/Detail'


const Stack = createStackNavigator()


/**
 * screenOptions 
 *  headerStyle : 헤더 스타일을 적용합니다.
 *  headerTintColor : 타이틀 색상 변경
 *  headerBackTitleVisible : 백버튼의 타이틀 표기 여부를 결정
 */
export default () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle : {
                backgroundColor : 'black',
                borderBottomColor : 'black',
                shadowColor : 'black'
            },
            headerTintColor : 'white',
            headerBackTitleVisible : false
        }}
    
    >
        <Stack.Screen name='Tab' component={Tabs}/>
        <Stack.Screen name='Detail' component={Detail}/>
    </Stack.Navigator>
)