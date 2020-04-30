import React from 'react'
import { View, Text } from 'react-native'
import ScrollContainer from '../Components/ScrollContainer'
import HorizontalSlider from '../Components/HorizontalSlider'
import Vertical from '../Components/Vertical'
import Horizontal from '../Components/Horizontal'
import List from '../Components/List'
import styled from 'styled-components/native'

const Container = styled.View`
    margin-top : 30px;
`;


const TVPresenter = ({loading, popular, topRated, today, refreshFn}) => (
    <ScrollContainer loading={loading} refreshFn={refreshFn}>    
        <Container>
            <HorizontalSlider title="Popular show">
                {popular.map(show => (
                    <Vertical   
                        key={show.id} 
                        id={show.id}
                        poster={show.poster_path}
                        vote={show.vote_average}
                        title={show.name}
                    />                   
                ))}
            </HorizontalSlider>
            <HorizontalSlider title="Top Rated">
                {topRated.map(show => (
                    <Vertical   
                        key={show.id} 
                        id={show.id}
                        poster={show.poster_path}
                        vote={show.vote_average}
                        title={show.name}
                    />                   
                ))}
            </HorizontalSlider>
            <List title="Airing Today">
                {today.map(show => (
                    <Vertical
                        key={show.id} 
                        id={show.id}
                        poster={show.poster_path}
                        vote={show.vote_average}
                        title={show.name}
                    />
                ))}
            </List>            
        </Container>

    </ScrollContainer>
)

export default TVPresenter
