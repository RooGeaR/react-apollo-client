import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
    color: #7b7b7b;
    font-size: 14px;
`;

const LabelInfo = props => {
    return <Label> {props.text} </Label>
}

export default LabelInfo;