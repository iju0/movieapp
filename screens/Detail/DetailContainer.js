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



    const [detail, setDetail] = useState({
        loading : true,
        result : {
            title,
            backgroundImage,
            poster,
            overview,
            votes
        }
    })


    const getData = async() => {

        // if (isTv) {
        //     const [getMovie, getMovieError] = await tvAPI.show(id)
        // } else {
        //     const [getMovie, getMovieError] = await movieAPI.movie(id)
        // }
        //

        // setMovie({
        //     ...getMovie,
        //     title : getMovie.title,
        //     backgroundImage : getMovie.backdrop_path,
        //     poster : getMovie.poster_path,
        //     overview:  getMovie.overview,
        //     votes : getMovie.vote_average
        // })

        const [getDetail, getDetailError] = isTv ?
            await tvAPI.show(id) : await  movieAPI.movie(id)

        setDetail({
            loading : false,
            result : {
                ...getDetail,
                title : getDetail.title || getDetail.name,
                backgroundImage : getDetail.background_path,
                poster : getDetail.poster_path,
                overview : getDetail.overview,
                votes : getDetail.vote_average,
            }
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
            {...detail}
        />


    )
}

export default DetailContainer
