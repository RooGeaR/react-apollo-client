import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
    color: #000;
`;

const CommentContent = props => {
    return <Content> {props.text} </Content>
}

export default CommentContent;