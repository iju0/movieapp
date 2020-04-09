import React, { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
import {movieAPI} from '../Api';


export default ({navigation}) => {
  
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieAPI.nowPlaying();
    const [popular, popualError] = await movieAPI.popular();
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <View>
      <Text>Home</Text>
    </View>
  )

}
