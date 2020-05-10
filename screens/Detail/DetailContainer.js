import React, {useState, useEffect, useLayoutEffect} from 'react'
import * as WebBrowser from 'expo-web-browser'
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

    const [detail, setDetail] = useState({
        loading : true,
        result : {
            title,
            backgroundImage,
            poster,
            overview,
            votes,
            videos : {
                results : []
            }
        }
    })

    const openBrowser = async url => {
        await WebBrowser.openBrowserAsync(url)
    }


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
            openBrowser={openBrowser}
        />


    )
}

export default DetailContainer
