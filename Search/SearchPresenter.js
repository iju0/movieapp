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

            </HorizontalSlider>
        )}

        {shows.length !== 0 && (
            <HorizontalSlider title='show tv results'>

            </HorizontalSlider>
        )}        

    </Container>
)

export default SearchPresenter
