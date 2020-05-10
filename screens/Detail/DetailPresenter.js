import React from 'react'
import { Dimensions, ActivityIndicator } from 'react-native'
import styled from 'styled-components/native'
import ScrollContainer from '../../Components/ScrollContainer'
import {apiImage} from '../../Api'
import Poster from '../../Components/Poster'
import Vote from '../../Components/Vote'
import {formatDate} from '../../utils'
import {TouchableOpacity} from "react-native-gesture-handler";
import Link from '../../Components/Link'


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
    margin-top : 30px;
    padding : 0px 30px;
`

const DataValue = styled.Text`
    color : white;
    opacity : 0.8;
    font-weight : 500;
`

const DataName = styled.Text`
    color : white;
    margin-top: 30px;
    margin-bottom: 15px;
    opacity: 0.8;
    font-weight: 800;
`




const DetailPresenter = ({result, loading, openBrowser }) => (
    <ScrollContainer
        loading={false}
        contentContainerStyle={{paddingBottom: 80}}
    >
        <>
            <Header>
                <BG source={{url : apiImage(result.backgroundImage)}}/>
                <Container>
                    <Poster url={result.poster}/>
                    <Info>
                        <Title>{result.title}</Title>
                        {result.votes && (<Vote votes={result.votes}/>)}
                    </Info>
                </Container>
            </Header>
            <Data>
                {result.overview && (
                    <>
                        <DataName>Overview</DataName>
                        <DataValue>{result.overview}</DataValue>
                    </>
                )}

            {loading && (
                <ActivityIndicator style={{marginTop: 30}} color={'white'} />
            )}

            {result.spoken_languages && (
                <>
                    <DataName>languages</DataName>
                    <DataValue>{result.spoken_languages.map(l => l.name)}</DataValue>
                </>
            )}

            {result.release_date && (
              <>
                <DataName>release Date</DataName>
                <DataValue>{formatDate(result.release_date)}</DataValue>
              </>
            )}

            {/*
                status, runtime, first_air_date, genres

            */}

            {result.genres && (
                <>
                    <DataName>Genres</DataName>
                    <DataValue>
                        {result.genres.map((g, index) =>
                            index + 1 === result.genres.length ?
                                g.name : `${g.name}, `
                        )}
                    </DataValue>
                </>
            )}

                {result.imdb_id && (
                    <Link
                        text={'IMDB Page'}
                        icon={'imdb'}
                        onPress={() =>
                            openBrowser(`https://www.imdb.com/title/${result.imdb_id}`)
                        }
                    />
                )}

            </Data>


        </>
    </ScrollContainer>
)

export default DetailPresenter
