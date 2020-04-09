import React, { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
import {movieAPI} from '../Api';


export default ({navigation}) => {

  const [movies, setMovies] = useState({
    nowPlaying : [],
    popular : [],
    upcoming : [],
    nowPlayingError : null,
    popualError : null,
    upcomingError : null
  })
  
  const getData = async () => {
    const [nowPlaying, nowPlayingError] = await movieAPI.nowPlaying();
    const [popular, popualError] = await movieAPI.popular();
    const [upcoming, upcomingError] = await movieAPI.upcoming();

    setMovies({
      nowPlaying,
      nowPlayingError,
      popular,
      popualError,
      upcoming,
      upcomingError
    })

  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <View>
      <Text>{movies.nowPlaying?.length}</Text>
    </View>
  )

}
