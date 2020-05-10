import React, {useState, useEffect, useLayoutEffect} from 'react'
import { View, Text, Dimensions } from 'react-native'
import DetailPresenter from './DetailPresenter'
import {movieAPI, tvAPI, apiImage} from '../../Api'

const DetailContainer = ({
        navigation, 
        route : {
            params : {
                id, 
                title, 
                backgroundImage, 
                poster, 
                votes, 
                overview,
                isTv
            }
        }
    }) => {

    navigation.setOptions({
        title
    })

    const [loading, setLoading] = useState(true)



    const [movie, setMovie] = useState({
        title,
        backgroundImage,
        poster,
        overview,
        votes
    })


    const getData = async() => {

        if (isTv) {
            const [getMovie, getMovieError] = await tvAPI.show(id)
        } else {
            const [getMovie, getMovieError] = await movieAPI.movie(id)
        }

        setMovie({
            ...getMovie,
            title : getMovie.title,
            backgroundImage : getMovie.backdrop_path,
            poster : getMovie.poster_path,
            overview:  getMovie.overview,
            votes : getMovie.vote_average
        })
    }

    useEffect(() => {
        getData()
    }, [id])

    useLayoutEffect(() => {
        navigation.setOptions({title})
    })


    return (
        <DetailPresenter
            {...movie}
            loading={loading}
        />


    )
}

export default DetailContainer
