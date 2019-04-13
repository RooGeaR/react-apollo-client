import { gql } from 'apollo-boost';

const createComment = gql`
    mutation CreateComment($comment: commentinput!) {
        createComment(comment: $comment) {
            id
            content
        }
    }
`;

const deleteComment = gql`
    mutation DeleteComment($id: Int!) {
        deleteComment(id: $id) {
            id
            content
        }
    }
`;

export { createComment, deleteComment };