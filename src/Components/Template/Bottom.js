import React from 'react';
import { Route, Switch, useHistory, useLocation, MemoryRouter as Router, } from 'react-router-dom';
import { AppOutline, MessageOutline, CalendarOutline, AppstoreOutline } from 'antd-mobile-icons';
import { NavBar, TabBar } from 'antd-mobile';


function Bottom() {
  const history = useHistory();
  const location = useLocation();
  let { pathname } = location;
  const setRouteActive = (value) => {
      history.push(value);
  };
  console.log(pathname);
  if (pathname.includes('home')) {
    pathname = '/home';
  }
  if (pathname.includes('calendar')) {
    pathname = '/calendar';
  }
  if (pathname.includes('mbti')) {
    pathname = '/mbti';
  }
  if (pathname.includes('community')) {
    pathname = '/community';
  }

  const tabs = [
    {
        key: '/',
        title: '홈',
        icon: <AppOutline />,
    },
    {
        key: '/calendar',
        title: '방송일정',
        icon: <CalendarOutline />,
    },
    {
        key: '/mbti',
        title: 'MBTI',
        icon: <AppstoreOutline />,
    },
    {
        key: '/community',
        title: '커뮤니티',
        icon: <MessageOutline />,
    },
  ];
  return (
    <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (<TabBar.Item key={item.key} icon={item.icon} title={item.title}/>))}
    </TabBar>
  );
};

export default Bottom;