import React, { useState } from 'react'
import SearchPresenter from './SearchPresenter'
import {movieAPI, tvAPI} from '../../Api'

const SearchContainer = () => {

    const [refreshing, setRefreshing] = useState(false)
    const [keyword, setKeyword] = useState('')
    const [results, setResults] = useState({
        movies : [],
        shows : [],
        moviesError : null,
        showsError : null
    })

    const onChange = text => setKeyword(text)
    const search = async () => {

        if (keyword === '') {
            return
        }

        const [movies, moviesError] = await movieAPI.search(keyword)
        const [shows, showsError] = await tvAPI.search(keyword)

        setResults({
            movies,
            shows,
            moviesError,
            showsError
        })
    }



    return (
        <SearchPresenter
            {...results}
            onChange={onChange}
            onSubmit={search}
            keyword={keyword}

        />
    )
}

export default SearchContainer
