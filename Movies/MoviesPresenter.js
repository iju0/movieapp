import React from 'react'
import styled from 'styled-components/native'
import Swiper from 'react-native-web-swiper'
import { ScrollView, Dimensions } from 'react-native'
import Slide from '../Components/Slide'
import Title from '../Components/Title'
import Vertical from '../Components/Vertical'
import Horizontal from '../Components/Horizontal'
import ScrollContainer from '../Components/ScrollContainer'

const {width : WIDTH, height : HEIGHT} = Dimensions.get('window')

const Container = styled.View``;

const SlideContainer = styled.View`
    width : 100%;
    height : ${HEIGHT/3}px;
    margin-bottom : 30px;
`;

const UpComingContainer = styled.View`
    margin-top : 20px;
`;


const MoviesPresenter = ({loading, nowPlaying, popular, upcoming}) => (

    // <ScrollView
    //     style={{backgroundColor : 'black'}}
    //     contentContainerStyle={{
    //         flex : loading ? 1 : 'auto',
    //         justifyContent : loading ? 'center' : 'flex-start',
    //         backgroundColor : 'black'
    //     }}
    
    // >
    //     {loading ? (
    //         <ActivityIndicator color='white' size='small'/>
    //     ) : (
    //         <>
                
                

                
    //         </>
    //     )}
    // </ScrollView>

    <ScrollContainer loading={loading}>
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
                <ScrollView
                    style={{marginTop : 20, marginBottom : 40}}
                    contentContainerStyle={{paddingLeft : 30}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                        {popular.map(movie => (
                            <Vertical
                                id={movie.id}
                                key={movie.id}
                                poster={movie.poster_path}
                                title={movie.title}
                                votes={movie.vote_average}
                            />
                        ))}
                </ScrollView>
                <UpComingContainer>
                    {upcoming.map(movie => (
                        <Horizontal
                            key={movie.key}
                            id={movie.id}
                            poster={movie.poster_path}
                            releaseDate={movie.release_date}
                            overview={movie.overview}
                            title={movie.title}
                        />
                    ))}

                </UpComingContainer>
            </Container>              
        </>
    </ScrollContainer>


)


export default MoviesPresenter

