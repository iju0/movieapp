import React, {useState, useEffect} from 'react'
import { View, Text, Dimensions } from 'react-native'
import DetailPresenter from './DetailPresenter'
import {movieAPI, tvAPI, apiImage} from '../../Api'
import ScrollContainer from '../../Components/ScrollContainer'
import Poster from '../../Components/Poster'
import Vote from '../../Components/Vote'
import styled from 'styled-components/native'


const Header = styled.View`
    height : ${Dimensions.get('window').height / 3}px;
    align-items : center;
    justify-content : flex-end;
`

const BG = styled.Image`
    width : 100%;
    height : ${Dimensions.get('window').height / 3}px;
    opacity : 0.4;
    position : absolute;
`


const Container = styled.View`
    flex-direction : row;
    align-items : center;
    top : 30px;
`

const Title = styled.Text`
    color : white;
    font-weight : 600;
    font-size : 24px;
    margin-bottom : 10px;
`

const Info = styled.View`
    width : 50%;
    margin-left : 40px;
`

const Data = styled.View`
    margin-top : 80px;
    padding : 0px 30px;
`

const DataValue = styled.Text`
    color : white;
    opacity : 0.8;
    font-weight : 500;
`

const DataName = styled.Text`
    color : white;
`


const DetailContainer = ({
        navigation, 
        route : {
            params : {
                id, 
                title, 
                backgroundImage, 
                poster, 
                votes, 
                overview
            }
        }
    }) => {

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
            <>
                <Header>
                    <BG source={{url : apiImage(backgroundImage)}}/>
                    <Container>
                        <Poster url={poster}/>
                        <Info>
                            <Title>{title}</Title>
                            {votes && (<Vote votes={votes}/>)}
                        </Info>
                    </Container>
                </Header>
                <Data>
                    {overview && (
                        <>
                            <DataName>Overview</DataName>
                            <DataValue>{overview}</DataValue>
                        </>
                    )}
                </Data>
            </>
        </ScrollContainer>
    )
}

export default DetailContainer
