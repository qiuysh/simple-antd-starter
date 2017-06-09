import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import Utils from './utils/util';
import Login from './components/login';
import App from './app';
import Users from './components/users';
import Books from './components/books';
import Messages from './components/messages';
import System from './components/system';


// 根路由
const routeConfig = {
    path: '/',
    component: 'div',
    indexRoute: {
        component: Login
    },
    childRoutes: [
        {
            path: 'login', // 登录路由
            getComponent: (nextState, cb) => {
                require.ensure([], (require) => {
                    cb(null, Login)
                })
            }
        }, {
            onEnter: Utils.redirectToLogin,
            path: 'home',
            getChildRoutes(location, callback) {
                require.ensure([], function (require) {
                        callback(null, [
                            {
                                path: 'users',
                                getComponent: (nextState, cb) => {
                                    require.ensure([], (require) => {
                                        cb(null, Users)
                                    })
                                }
                            }, {
                                path: 'messages',
                                getComponent: (nextState, cb) => {
                                    require.ensure([], (require) => {
                                        cb(null, Messages)
                                    })
                                }
                            }, {
                                path: 'books',
                                getComponent: (nextState, cb) => {
                                    require.ensure([], (require) => {
                                        cb(null, Books)
                                    })
                                }
                            }, {
                                path: 'system',
                                getComponent: (nextState, cb) => {
                                    require.ensure([], (require) => {
                                        cb(null, System)
                                    })
                                }
                            }
                        ])
                    })
            },

            getIndexRoute(location, callback) {
                require.ensure([], function (require) {
                    callback(null, Users)
                })
            },

            getComponents(location, callback) {
                require.ensure([], function (require) {
                    callback(null, App)
                })
            }
        }
    ]
};

console.log(routeConfig)

ReactDOM.render(
    <Router history={browserHistory} routes={routeConfig}/>, 
    document.getElementById('app')
);
