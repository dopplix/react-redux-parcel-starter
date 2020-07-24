import React from "react";
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import { store, history } from './data/configureStore';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import User from './pages/User';

export default () => {
  return(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" render={()=> <DefaultLayout pageComponent={Home}/>}/>
          <Route path="/user" render={()=> <DefaultLayout pageComponent={User}/>}/>
          <Route render={()=> <DefaultLayout pageComponent={Home}/>}/>
        </Switch>
      </ConnectedRouter>
    </Provider>
  )
};
