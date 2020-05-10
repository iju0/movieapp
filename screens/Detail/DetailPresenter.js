import React from 'react'
import { Dimensions, ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import ScrollContainer from '../../Components/ScrollContainer'
import {apiImage} from '../../Api'
import Poster from '../../Components/Poster'
import Vote from '../../Components/Vote'


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




const DetailPresenter = ({movie, loading }) => (
    <ScrollContainer loading={false}>
        <>
            <Header>
                <BG source={{url : apiImage(movie.backgroundImage)}}/>
                <Container>
                    <Poster url={movie.poster}/>
                    <Info>
                        <Title>{title}</Title>
                        {movie.votes && (<Vote votes={movie.votes}/>)}
                    </Info>
                </Container>
            </Header>
            <Data>
                {movie.overview && (
                    <>
                        <DataName>Overview</DataName>
                        <DataValue>{movie.overview}</DataValue>
                    </>
                )}

            {loading && (
                <ActivityIndicator style={{marginTop: 30}} color={'white'} />
            )}
            </Data>

        </>
    </ScrollContainer>
)

export default DetailPresenter
