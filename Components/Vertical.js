import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Poster from '../Components/Poster'
import {apiImage} from '../Api'
import Vote from './Vote'
import {TouchableOpacity} from 'react-native'

const Container = styled.View`
    align-items : center;
    margin-left : 20px;
`;

const Title = styled.Text`
    color : white;
    font-weight : 500;
    margin : 10px 0px 5px 0px;
`;



const Vertical = ({poster, title, vote}) => (
    <TouchableOpacity>
        <Container>
            <Poster url={apiImage(poster)}/>
            <Title>{title}</Title>
            <Vote votes={vote}/>
        </Container>
    </TouchableOpacity>
)

Vertical.PropTypes = {
    poster : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    vote : PropTypes.number.isRequired
}

export default Vertical
