import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    color: #000;
    background-color: #fff;
    font-size: 12px;
    border: 2px solid #000;
    border-radius: 8px;
    padding: 5px;
`;

const InputButton = ({text, onClick}) => {
    return <Button onClick={onClick}> {text} </Button>
}

export default InputButton;