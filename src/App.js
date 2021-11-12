import './App.css';
import React, { useState } from 'react';
import Home from './Components/Home';
import User from './Components/User';
import MbtiPage from './Components/MbtiPage';
import { NavBar, TabBar } from 'antd-mobile';
import { Route, Switch, useHistory, useLocation, MemoryRouter as Router, } from 'react-router-dom';
import { AppOutline, MessageOutline, CalendarOutline, AppstoreOutline } from 'antd-mobile-icons';
import './Style/demo2.css';
import Bottom from './Components/Template/Bottom';


function App() {
  const [title, setTitle] = useState('달차네 마을');
  const [viewBefore, setViewBefore] = useState(null);

  return (
    <div className="app">
      <div className="top">
        <NavBar back={viewBefore} className="headerTitle">{title}</NavBar>
      </div>
      <div className="body">
        <Route exact path='/mbti'>
          <Home />
        </Route>
        <Route exact path='/calendar'>
          <Todo />
        </Route>
        <Route exact path={['/', '/home']}>
          <Main />
        </Route>
        <Route exact path='/community'>
          <Message />
        </Route>
        <Route exact path='/me'>
          <PersonalCenter />
        </Route>
        <Route path="/mbti/user/:name" exact={true} component={User} />
        <Route path="/mbti/:mbti" exact={true} component={MbtiPage} />
      </div>
      <div className="bottom">
        <Bottom />
      </div>
      {/* <Route path="/" exact={true} component={Home} />
      <Route path="/user/:name" exact={true} component={User} />
      <Route path="/test" exact={true} component={Test} />
      <Route path="/mbti/:mbti" exact={true} component={MbtiPage} /> */}
    </div>
  );
}

export default App;

function Todo() {
  return <div>현재 준비 중입니다</div>;
}
function Message() {
  return <div>현재 준비 중입니다</div>;
}
function PersonalCenter() {
  return <div>현재 준비 중입니다</div>;
}

function Main() {
  return (
    <>
      <iframe src="https://player.twitch.tv/?channel=yatchacha&parent=yatchacha.com&parent=localhost" frameborder="0" allowfullscreen="true" scrolling="no" height="378" width="620"></iframe>    
    </>
  )
}