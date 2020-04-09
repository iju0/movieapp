import React from 'react'
import styled from 'styled-components/native'
import Swiper from 'react-native-web-swiper'
import { ActivityIndicator } from 'react-native'
import Slide from '../Components/Slide'


const Container = styled.View`
    flex : 1;
    background-color : black;
    justify-content : center;
`;

const Text = styled.Text`
    color : white;
`;

const MoviesPresenter = ({loading, nowPlaying}) => (

    <Container>
        {loading ? (
            <ActivityIndicator color='white' size='small'/>
        ) : (
            <>
                <Swiper controlsEnabled={false} loop timeout={3}>
                    {nowPlaying.map(movie => (
                        <Slide 
                            key={movie.id}
                            id={movie.id}
                            title={movie.original_title}
                            overview={movie.overview}
                            votes={movie.vote_average}
                            backgroundImage={movie.backdrop_path}
                        />

                    ))}
                </Swiper>
            </>
        )}
    </Container>
)


export default MoviesPresenter

