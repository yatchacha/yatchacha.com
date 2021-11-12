import { NavBar, TabBar } from 'antd-mobile';
import React, { useState } from 'react';
import { Route, Switch, useHistory, useLocation, MemoryRouter as Router, } from 'react-router-dom';
import { AppOutline, MessageOutline, CalendarOutline, AppstoreOutline } from 'antd-mobile-icons';
import './Style/demo2.css';


const HomeWrapper = () => {
  return (
    <Router initialEntries={['/home']}>
      <div className="app">
        <div className="top">
          <NavBar className="headerTitle">{title}</NavBar>
        </div>
        <div className="body">
          <Switch>
            <Route exact path='/home'>
              <Home />
            </Route>
            <Route exact path='/todo'>
              <Todo />
            </Route>
            <Route exact path='/message'>
              <Message />
            </Route>
            <Route exact path='/me'>
              <PersonalCenter />
            </Route>
          </Switch>
        </div>
        <div className="bottom">
          <Test />
        </div>
      </div>
    </Router>
  );
}

export default HomeWrapper;
