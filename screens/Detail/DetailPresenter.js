import React from 'react'
import { View, Dimensions } from 'react-native'
import styled from 'styled-components/native'
import ScrollContainer from '../../Components/ScrollContainer'
import {apiImage} from '../../Api'
import Poster from '../../Components/Poster'
import Vote from '../../Components/Vote'


const BackGround = styled.View`

`

const BackGroundImage = styled.Image`

`

const Content = styled.View`

`
const Text = styled.Text`
    color : white;
`




const DetailPresenter = ({id, title, vote, poster, backgroungImage, overview, language, releaseDate }) => (
    <ScrollContainer>
        <Text>{id}</Text>
        <Text>{title}</Text>
        <Text>{vote}</Text>
        <Text>{poster}</Text>
        <Text>{backgroungImage}</Text>
        <Text>{overview}</Text>
        <Text>{language}</Text>
        <Text>{releaseDate}</Text>
    </ScrollContainer>
)

export default DetailPresenter
