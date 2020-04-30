import React from 'react'
import { View, Text } from 'react-native'
import Input from '../Components/Input'
import styled from 'styled-components/native'
import Vertical from '../Components/Vertical'
import Horizontal from '../Components/Horizontal'
import HorizontalSlider from '../Components/HorizontalSlider'


const Container = styled.ScrollView`
    background-color : black;
`


const SearchPresenter = ({movies, shows, keyword, onChange, onSubmit}) => (
    <Container
        contentContainerStyle={{paddingTop : 10}}
    >
        <Input 
            placeHolder='Write a keyword'
            value={keyword}
            onChange={onChange}
            onSubmit={onSubmit}
        />

        {movies.length !== 0 && (
            <HorizontalSlider title='movie results'>
                {movies.map(movie => (
                    <Vertical
                        key={movie.id}
                        id={movie.id}
                        potser={movie.potser_path || movie.backdrop_path}
                        title={movie.title}
                        vote={movie.vote_average}
                    />
                ))}
            </HorizontalSlider>
        )}

        {shows.length !== 0 && (
            <HorizontalSlider title='show tv results'>
                {shows.map(show => (
                    <Vertical
                        key={show.id}
                        id={show.id}
                        title={show.name}
                        poster={show.potser_path || show.backdrop_path}
                        vote={show.vote_average}
                    />
                ))}

            </HorizontalSlider>
        )}        

    </Container>
)

export default SearchPresenter
