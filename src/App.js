import React, { Component } from 'react';
import { Query } from 'react-apollo';
import Comment from './components/Comment';
import CreateComment from './components/CreateComment';
import UserInfo from './components/UserInfo';
import Title from './components/Title';
import Separator from './components/Separator';
import { userInfoQuery } from './queries';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Query query={userInfoQuery} variables={{id: 1}}>
          {({ data, loading, error, fetchMore, refetch }) => {
            if (loading) return <p>loading...</p>;
            if (error) return <p>{error.message}</p>
            console.log(data.user.comments);
            return (
              <div className='row'>
                <div className={'col-md-5 col-md-offset-3'}>
                  <UserInfo 
                    firstName={data.user.first_name} 
                    lastName={data.user.last_name}
                    lastUpdated={data.user.last_updated}
                  />
                  
                  <CreateComment userId={1} refetch={refetch}/>

                  <Title text={'Comments'}/>

                  {
                    data.user.comments.map((comment, i) => {
                      return (
                        <>
                          <Comment 
                            key={i}
                            id={comment.id}
                            content={comment.content}
                            refetch={refetch}
                          />
                          <Separator />
                        </>
                      );
                    })
                  }
                  </div>
              </div>

            );
          }}
        </Query>
      </div>
    );
  }
}

export default App;
