import React, { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
import {tvAPI} from '../Api';

export default ({navigation}) => {


  const [tv, setTV] = useState({
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
    <View>
      <Text>{tv.today?.length}</Text>
    </View>
  )


}

