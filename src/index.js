import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Utils from './utils/util';
import Login from './components/login';
import App from './app';


// 根路由
const routeConfig = {
    path: '/',
    component: 'div',
    indexRoute: {component: Login},
    childRoutes: [
        {
            path: 'login', // 登录路由
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, Login)
                })
            }
        },
        {
            onEnter: Utils.redirectToLogin,
            path: 'home',
            component: App,
            childRoutes: [
                {
                    path: 'users',
                    getComponent: (nextState, cb) => {
                        require.ensure([], (require) => {
                            cb(null, require('./components/users'))
                        })
                    }
                },
                {
                    path: 'messages',
                    getComponent: (nextState, cb) => {
                        require.ensure([], (require) => {
                            cb(null, require('./components/messages'))
                        })
                    }
                },
                {
                    path: 'books',
                    getComponent: (nextState, cb) => {
                        require.ensure([], (require) => {
                            cb(null, require('./components/books'))
                        })
                    }
                },
                {
                    path: 'system',
                    getComponent: (nextState, cb) => {
                        require.ensure([], (require) => {
                            cb(null, require('./components/system'))
                        })
                    }
                },
            ]
        }
    ]
};

ReactDOM.render(
    <Router history={ browserHistory } routes={ routeConfig }/>,
    document.getElementById('app')
);
