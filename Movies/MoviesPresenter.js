import React from 'react'
import styled from 'styled-components/native'
import Swiper from 'react-native-web-swiper'
import { ScrollView, Dimensions } from 'react-native'
import Slide from '../Components/Slide'
import Title from '../Components/Title'
import Vertical from '../Components/Vertical'
import Horizontal from '../Components/Horizontal'
import ScrollContainer from '../Components/ScrollContainer'
import HorizontalSlider from '../Components/HorizontalSlider'
import List from '../Components/List'



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


const MoviesPresenter = ({loading, nowPlaying, popular, upcoming, refreshFn}) => (

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

    <ScrollContainer loading={loading} refreshFn={refreshFn}>
        <>
            <SlideContainer>
                <Swiper controlsEnabled={false} loop timeout={3}>
                    {nowPlaying.map(movie => (
                        <Slide 
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            overview={movie.overview}
                            votes={movie.vote_average}
                            backgroundImage={movie.backdrop_path}
                            poster={movie.poster_path}
                        />

                    ))}
                </Swiper>
            </SlideContainer>
            <Container>
                <HorizontalSlider title={"인기상영작"}>
                    {popular.map(movie => (
                        <Vertical
                            id={movie.id}
                            key={movie.id}
                            poster={movie.poster_path}
                            title={movie.title}
                            votes={movie.vote_average}
                        />
                    ))}
                </HorizontalSlider>
                <List title={"Comming Soon"}>
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
                </List>        
            </Container>              
        </>
    </ScrollContainer>


)


export default MoviesPresenter

