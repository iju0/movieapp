import React, {useState, useEffect} from 'react'
import { View, Text, Dimensions } from 'react-native'
import DetailPresenter from './DetailPresenter'
import {movieAPI, tvAPI, apiImage} from '../../Api'
import ScrollContainer from '../../Components/ScrollContainer'
import Poster from '../../Components/Poster'
import Vote from '../../Components/Vote'
import styled from 'styled-components/native'


const Header = styled.View``

const BG = styled.Image`
    width : 100%;
    height : ${Dimensions.get('window').height / 3}px;
    opacity : 0.4;
    position : absolute;
`


const Container = styled.View``

const Title = styled.Text`
    color : white;
`

const Info = styled.View``



const DetailContainer = ({navigation, route : {params : {id, title, backgroundImage, poster, votes}}}) => {

    navigation.setOptions({
        title
    })

    


    // const [detail, setDetail] = useState({
    //     movie : null,
    //     movieError : null,
    //     show : null,
    //     showError : null
    // })

    // const getDetail = async() => {
    //     console.log(id)
    //     const [movie, movieError] = await movieAPI.movie(id)
    //     // const [show, showError] = await tvAPI.show(id)

    //     setDetail({
    //         movie,
    //         movieError,
    //         // show,
    //         // showError
    //     })

    // }

    // useEffect(() => {
    //     getDetail()
    // }, [])


    return (
        <ScrollContainer loading={false}>
            <Header>
                <BG source={{url : apiImage(backgroundImage)}}/>
                <Container>
                    <Poster url={poster}/>
                    <Info>
                        <Title>{title}</Title>
                        <Vote votes={votes}/>
                    </Info>
                </Container>
            </Header>
        </ScrollContainer>
    )
}

export default DetailContainer
