import React from 'react';
import styled from 'styled-components';

const Hr = styled.hr`
    border-top: 2px solid ${props => props.borderColor ||  '#f1f1f1'};
    margin-top: 10px;
    margin-bottom: ${props => props.marginBottom ||  '20px'};
`;

const Separator = ({borderColor, marginBottom}) => {
    return <Hr borderColor={borderColor} marginBottom={marginBottom}/>
}

export default Separator;