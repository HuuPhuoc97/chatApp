/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import Login from '../Login/index';
import ListFriendContainer from '../ListFriendContainer/index';
import ListFanPage from '../ListFanPage/index';
import Messenger from '../../components/Messenger/index';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/listfriend" component={ListFriendContainer} />
        <Route path="/listfanpage" component={ListFanPage} />
        <Route path="/messenger" component={Messenger} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
