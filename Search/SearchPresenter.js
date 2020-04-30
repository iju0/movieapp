import React from 'react'
import { View, Text } from 'react-native'
import Input from '../Components/Input'
import styled from 'styled-components/native'

const Container = styled.ScrollView`
    background-color : black;
`


const SearchPresenter = () => (
    <Container>
        <Input placeHolder='Write a keyword'/>
    </Container>
)

export default SearchPresenter
