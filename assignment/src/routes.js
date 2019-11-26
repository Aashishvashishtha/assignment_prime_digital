import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './screens/layout/layout';
import ListPost from './screens/post'
import FavListPost from './screens/post/index2';


class Routes extends Component {
  render() {
    console.log("hi")
    return (
      <Layout>
        <Switch>
          <Route exact path="/" component={ListPost} />
          <Route exact path="/posts" component={ListPost} />
          <Route path ="/isFavourite=true" component={FavListPost}/>
        </Switch>
       </Layout>
    );
  }
}

export default Routes;
