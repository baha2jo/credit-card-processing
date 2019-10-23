import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Home } from '../pages/Home';

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact={true} path='/' to='/home' />
      <Route path='/home' component={Home} />
    </Switch>
  </BrowserRouter>
);
