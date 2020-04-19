import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { TouchableOpacity } from 'react-native'
import Poster from '../Components/Poster'
import {apiImage} from '../Api'

const Container = styled.View`
    width : 100%;
    height : 100%;
`;

const BG = styled.Image`
    width : 100%;
    height : 100%;
    opacity : 0.4;
    position : absolute;
`;

const Content = styled.View`
    flex-direction : row;
    height : 100%;
    align-items : center;
    justify-content : space-around;
`;

const Data = styled.View`
    width : 50%;
    align-items : flex-start;
`;

const Title = styled.Text`
    color : white;
    font-weight : bold;
    font-size : 18px;
    margin-bottom : 10px;
`;
const Votes = styled.Text`
    color : rgb(220, 220, 220);
    margin-bottom : 7px;
    font-size : 12px;
    font-weight : 500;
`;
const OverView = styled.Text`
    color : rgb(220, 220, 220);
    font-size : 14px;
    font-weight : 500;
`;

const Button = styled.View`
    margin-top : 10px;
    background-color : #e74c3c;
    padding : 7px 10px;
    border-radius : 3px;
`;

const ButtonText = styled.Text`
    color : white;
`;

const Slide = ({id, title, backgroundImage, votes, overview, poster}) => (
    <Container>
        <BG source={{url : apiImage(backgroundImage)}}/>
        <Content>
            <Poster url={apiImage(poster)}></Poster>
            <Data>
                <Title>{title.slice(0, 30)}</Title>
                <Votes>⭐️ {votes} / 10</Votes>
                <OverView>{overview.slice(0, 120)}</OverView>
                <TouchableOpacity>
                    <Button>
                        <ButtonText>View Detail</ButtonText>
                    </Button>
                </TouchableOpacity>
            </Data>
        </Content>
    </Container>    
)

Slide.propTypes = {
    id : PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    backgroundImage : PropTypes.string.isRequired,
    votes : PropTypes.number.isRequired,
    overview : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired
}

export default Slide

