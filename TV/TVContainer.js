import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import TVPresenter from './TVPresenter'
import {tvAPI} from '../Api'

export default () => {

    const [tv, setTV] = useState({
        loading : true,
        today : [],
        thisWeek : [],
        topRated : [],
        popular : [],
        todayError : null,
        thisWeekError : null,
        topRatedError : null,
        popularError : null
      })
    
    const getData = async () => {
        const [today, todayError] = await tvAPI.today();
        const [thisWeek, thisWeekError] = await tvAPI.thisWeek();
        const [topRated, topRatedError] = await tvAPI.topRated();
        const [popular, popularError] = await tvAPI.popular();

        setTV({
            loading : false,
            today,
            todayError,
            thisWeek,
            thisWeekError,
            topRated,
            topRatedError,
            popular,
            popularError
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <TVPresenter {...tv}/>
    )


}