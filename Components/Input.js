import React from 'react'

import styled from 'styled-components/native'
import PropTypes from 'prop-types'


const TextInput = styled.TextInput`
    background-color : white;
`


const Input = ({placeHolder, value, onChange, onSubmit}) => (
    <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeHolder}
        onSubmitEditing={onSubmit}
        returnKeyType={'search'}
    />
)

Input.propTypes = {
    placeHolder : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired,
    onChange : PropTypes.func.isRequired,
    onSubmit : PropTypes.func.isRequired
}



export default Input