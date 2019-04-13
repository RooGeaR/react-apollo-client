import React from "react";
import { Mutation } from "react-apollo";
import { deleteComment } from "../mutations";
import InputButton from "./InputButton";

const DeleteComment = ({id, refetch}) => {

  return (
    <Mutation mutation={deleteComment}>
      {(deleteComment, { data, loading, error }) => {
        return (
          <>
            <InputButton
              text={"Delete"}
              onClick={() => {
                deleteComment({
                    variables: { 
                        id: id 
                    }
                }).then(res => {
                  refetch();
                });
              }}
            />
            {loading && <p>processing...</p>}
            {error && <p>{error.message}</p>}
          </>
        );
      }}
    </Mutation>
  );
};

export default DeleteComment;
