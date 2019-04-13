import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    color: #000;
    font-size: 20px;
    font-weight: bold;
`;

const Title = props => {
    return <H1> {props.text} </H1>
}

export default Title;