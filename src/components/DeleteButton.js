import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
//import { deleteComment } from '../mutations';


const DeleteButton = () => {

        return (
            <Mutation mutation={removeStarquery}>
                {(removeStar, { data, loading, error }) => {
                    return (
                        <div>
                            <button
                                className="left"
                                onClick={() => {
                                    removeStar({
                                        variables:{ repoid: this.props.id }
                                    }).then(res => {
                                        this.props.refetch();
                                    })
                                }}
                            >
                            {" "}
                            Remove star
                            </button>
                            {loading && <p>processing...</p>}
                            {error && <p>{error.message}</p>}
                        </div>
                    );
                }}
            </Mutation>
        );
}

export default RemoveStar;