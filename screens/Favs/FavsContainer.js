import React, {useEffect, useState} from 'react'
import { View, Text } from 'react-native'
import FavsPresenter from './FavsPresenter'
import {movieAPI} from "../../Api";


const FavsContainer = () => {

    const [movies, setMovies] = useState({
        results : [],
        error : null
    })

    const getData = async () => {
        const [results, resultsError] = await movieAPI.discover()

        setMovies({
            results,
            error : resultsError
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <FavsPresenter {...movies} />
    )
}



export default FavsContainer
