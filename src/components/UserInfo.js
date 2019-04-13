import React from 'react';
import LabelInfo from './LabelInfo';
import styled from 'styled-components';
import Avatar from './Avatar';
import moment from 'moment';

const Info = styled.div`
    margin-bottom: 60px;
`; 

const UserInfo = props => {
    let fullname = `${props.firstName} ${props.lastName}`;
    let lastUpdated = moment(props.lastUpdated, "llll").fromNow();
    return (
        <Info>
            <Avatar />
            <div>
                <LabelInfo text={`Created by ${fullname}`}/>
            </div>
            <LabelInfo text={`Last updated about ${lastUpdated}`}/>
        </Info>
    );
}

export default UserInfo;