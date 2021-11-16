import './App.css';
import React, { useState, useEffect } from 'react';
import Home from './Components/Home';
import User from './Components/User';
import MbtiPage from './Components/MbtiPage';
import { NavBar, TabBar } from 'antd-mobile';
import { Route, Switch, useHistory, useLocation, MemoryRouter as Router, } from 'react-router-dom';
import { AppOutline, MessageOutline, CalendarOutline, AppstoreOutline } from 'antd-mobile-icons';
import './Style/demo2.css';
import Bottom from './Components/Template/Bottom';
import Main from './Pages/Main';
import CalendarPage from './Pages/CalendarPage';
import { Empty } from 'antd-mobile'
import "./Style/Global.css"

function App() {
  // 모바일에서 100vh 문제 해결
  let vh = 0;

  useEffect(() => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

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
          <CalendarPage />
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
    </div>
  );
}

export default App;

function Message() {
  return (
    <>
      <Empty description='현재 준비 중입니다' />
    </>
  );
}
function PersonalCenter() {
  return <div>현재 준비 중입니다</div>;
}
