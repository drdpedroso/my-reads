import React from 'react'

import styled from 'styled-components'

const ButtonWrapper = styled.button`
    ${props => props.selected ? 'background-color: green;' : ''}
`

const Button = props => (
  <ButtonWrapper onClick={props.onClick} selected={props.selected}>{props.text}</ButtonWrapper>
)

export default Button
