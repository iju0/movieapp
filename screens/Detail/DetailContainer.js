import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import DetailPresenter from './DetailPresenter'

const DetailContainer = ({navigation, route}) => {

    const { id }  = route.params


    



    return (
        <DetailPresenter/>
    )
}

export default DetailContainer
