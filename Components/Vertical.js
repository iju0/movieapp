import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Poster from '../Components/Poster'
import {apiImage} from '../Api'
import Vote from './Vote'
import {TouchableOpacity} from 'react-native'
import {trimText} from '../utils'
import {useNavigation} from '@react-navigation/native'

const Container = styled.View`
    align-items : center;
    margin-left : 20px;
`;

const Title = styled.Text`
    color : white;
    font-weight : 500;
    margin : 10px 0px 5px 0px;
`;



const Vertical = ({id, poster, title, vote}) => {
    const navigation = useNavigation()
    const goToDetail = () => {
        navigation.navigate('Detail', {
            id,
            poster,
            title,
            vote
        })
    }

    return (
        <TouchableOpacity onPress={goToDetail}>
            <Container>
                <Poster url={poster}/>
                <Title>{trimText(title, 30)}</Title>
                {vote > 0 && <Vote votes={vote}/>}
            </Container>
        </TouchableOpacity>
    )

}

Vertical.propTypes = {
    id : PropTypes.number.isRequired,
    poster : PropTypes.string,
    title : PropTypes.string.isRequired,
    vote : PropTypes.number
}

export default Vertical
