import React from 'react'
import { View, Text } from 'react-native'
import ScrollContainer from '../Components/ScrollContainer'
import HorizontalSlider from '../Components/HorizontalSlider'
import Vertical from '../Components/Vertical'

const TVPresenter = ({loading, popular, topRated}) => (
    <ScrollContainer loading={loading}>
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
    </ScrollContainer>
)

export default TVPresenter
