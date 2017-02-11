import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import App from './app';


// 根路由
const routeConfig = {
  path: '/',
  component: 'div',
  indexRoute: { component: App },
  childRoutes: [
    {
      path: 'login.html', // 登录路由
      component: require('./login')
    },
    {
      path: 'index.html', // 内容路由
      component: require('./app')
    }
  ]
};

ReactDOM.render(
  <Router history={ browserHistory } routes={ routeConfig }/>,
  document.getElementById('app')
);
