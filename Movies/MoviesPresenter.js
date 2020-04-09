import React from 'react'
import styled from 'styled-components/native'
import Swiper from 'react-native-web-swiper'
import { ActivityIndicator, View, Dimensions } from 'react-native'
import Slide from '../Components/Slide'


const {width : WIDTH, height : HEIGHT} = Dimensions.get('screen')

const Container = styled.View`
    flex : 1;
    background-color : black;
    justify-content : flex-start;
`;

const SlideContainer = styled.View`
    width : ${WIDTH}px;
    height : ${HEIGHT/4}px;
`;

const MoviesPresenter = ({loading, nowPlaying}) => (

    <Container>
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
            </>
        )}
    </Container>
)


export default MoviesPresenter

