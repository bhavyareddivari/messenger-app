
// libs
import React from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

// scenes
import HomePage from '../../scenes/home-page/index'
import ChatPage from '../../scenes/chat-page/index'

const Routes = () => (
  <main>
    <Switch>
     <Route exact path='/' component={HomePage}/>
     <Route path='/chat-online' component={ChatPage}/>
     <Route exact path="/" render={() => <Redirect to="/home" />} />
    </Switch>
  </main>
)

export default withRouter(Routes)
