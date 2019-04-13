import React from 'react';
import styled from 'styled-components';

const defaultAvatar = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/14d552d4-825e-46ae-a9af-7fd06e0ad1e9/d6330ot-afc58dd9-e841-4fc6-b6ea-5e04fde68765.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE0ZDU1MmQ0LTgyNWUtNDZhZS1hOWFmLTdmZDA2ZTBhZDFlOVwvZDYzMzBvdC1hZmM1OGRkOS1lODQxLTRmYzYtYjZlYS01ZTA0ZmRlNjg3NjUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.a5xkcxsOmh-qAgZRBbhI1Q1HQJF1jMcxwVd9GR7ey2k";

const  Img = styled.img`
    vertical-align: middle;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    float: left;
    margin-right: 10px;
`;

const Avatar = ({url}) => {
    return <Img src={url ? url : defaultAvatar} />
}

export default Avatar;