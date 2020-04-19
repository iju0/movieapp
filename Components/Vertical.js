import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Poster from '../Components/Poster'
import {apiImage} from '../Api'
import Vote from './Vote'

const Container = styled.View``;

const Title = styled.Text`
    color : white;
`;


const Vertical = ({poster, title, vote}) => (
    <Container>
        <Poster url={apiImage(poster)}/>
        <Title>{title}</Title>
        <Vote votes={vote}/>
    </Container>
)

Vertical.PropTypes = {
    poster : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    vote : PropTypes.number.isRequired
}

export default Vertical
