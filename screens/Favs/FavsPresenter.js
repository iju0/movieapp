import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import styled from 'styled-components/native'
import PropTypes from 'prop-types';
import {apiImage} from "../../Api";

const {width :WIDTH, height : HEIGHT} = Dimensions.get('window');

const Container = styled.View`
  flex : 1;
  background-color: black;
  align-items: center;
`

const Card = styled.View`
  top : 80px;
  height: ${HEIGHT / 1.5}px;
  width: 90%;
  position: absolute;
`
const Poster = styled.Image`
  border-radius: 20px;
  width: 100%;
  height: 100%;
`


const FavsPresenter = ({results}) => {
    return (
        <Container>
            {results.reverse().map(result => (
                <Card key={result.id}>
                    <Poster source={{url : apiImage(results.poster_path)}} />
                </Card>
            ))}
        </Container>
    )
}


export default FavsPresenter;
