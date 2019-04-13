import React from 'react';
import styled from 'styled-components';

const Textarea = styled.textarea`
    border: 2px solid #000;
    width: 100%;
    height: 200px;
    resize: none;
`;

const InputTextarea = ({text, onChange}) => {
    return ( 
        <Textarea 
            value={text}
            onChange={onChange}
        />
    );
}

export default InputTextarea;