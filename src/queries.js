import { gql } from 'apollo-boost';

const userInfoQuery = gql`
query getuser($id:ID!){
    user(id:$id){
        first_name
        last_name
        comments {
            id
            content
        }
        last_updated
    }
}
`;

export { userInfoQuery };