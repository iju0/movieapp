import React from 'react'
import styled from 'styled-components/native'
import Swiper from 'react-native-web-swiper'
import { ActivityIndicator, ScrollView, Dimensions } from 'react-native'
import Slide from '../Components/Slide'
import Title from '../Components/Title'


const {width : WIDTH, height : HEIGHT} = Dimensions.get('screen')

const Container = styled.View``;

const SlideContainer = styled.View`
    width : ${WIDTH}px;
    height : ${HEIGHT/4}px;
    margin-bottom : 50px;
`;

const MoviesPresenter = ({loading, nowPlaying}) => (

    <ScrollView
        style={{backgroundColor : 'black'}}
        contentContainerStyle={{
            flex : 1,
            justifyContent : loading ? 'center' : 'flex-start'
        }}
    
    >
        {loading ? (
            <ActivityIndicator color='white' size='small'/>
        ) : (
            <>
                <SlideContainer>
                    <Swiper controlsEnabled={false} loop timeout={3}>
                        {nowPlaying.map(movie => (
                            <Slide 
                                key={movie.id}
                                id={movie.id}
                                title={movie.original_title}
                                overview={movie.overview}
                                votes={movie.vote_average}
                                backgroundImage={movie.backdrop_path}
                                poster={movie.poster_path}

                            />

                        ))}
                    </Swiper>
                </SlideContainer>
                <Container>
                    <Title title={"인기상영작"} />
                </Container>
                
                {/*  upcoming, popular ... */}
            </>
        )}
    </ScrollView>
)


export default MoviesPresenter

