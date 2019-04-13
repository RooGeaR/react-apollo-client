import React, { useState } from "react";
import { Mutation } from 'react-apollo';
import { createComment } from "../mutations";
import InputButton from "./InputButton";
import InputTexarea from "./InputTextarea";
import Separator from "./Separator";
import moment from 'moment';

const CreateComment = ({userId, refetch}) => {
    const [text, setText] = useState("");

    const onChange = e => {
        setText(e.target.value);
    };

  return (
    <Mutation mutation={createComment}>
      {(createComment, { data, loading, error }) => {
        return (
          <div>
            <Separator borderColor={'#f5f5f5'} marginBottom={'1px'}/>
            <InputTexarea 
                text={text}
                onChange={onChange}
            />   
            <div className={'text-right'}>
              <InputButton
                text={"Send comment"}
                onClick={() => {
                  createComment({
                      variables: { 
                          comment: {
                              content: text,
                              user_id: userId,
                              created_at: moment().format("YYYY-MM-DD H:mm:ss")
                          }
                      }
                  }).then(res => {
                    refetch();
                  });
                }}
              />
            </div>
            {loading && <p>processing...</p>}
            {error && <p>{error.message}</p>}
          </div>
        );
      }}
    </Mutation>
  );
};

export default CreateComment;
