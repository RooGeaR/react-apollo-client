import React from "react";
import CommentContent from "./CommentContent";
import DeleteComment from "./DeleteComment";
import styled from "styled-components";

const Wrapper = styled.div`
    margin-top: 35px;
`;

const Comment = ({ id, content, refetch }) => {
  return (
    <Wrapper className={"row"}>
        <div className={"col-md-10"}>
            <CommentContent text={content} />
        </div>
        <div className={"col-md-2 text-right"}>
            <DeleteComment id={id} refetch={refetch} />
        </div>
    </Wrapper>
  );
};

export default Comment;
