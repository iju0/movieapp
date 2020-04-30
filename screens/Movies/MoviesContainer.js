import React, { useEffect, useState } from 'react';
import {movieAPI} from '../../Api';
import MoviesPresenter from './MoviesPresenter'

export default () => {

  const [refreshing, setRefreshing] = useState(false)
  const [movies, setMovies] = useState({
    loading : true,
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
      loading : false,
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
    <MoviesPresenter
      {...movies}
      refreshFn={getData}
    />
  )

}
