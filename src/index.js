import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import Utils from './utils/util';

// 根路由
const routeConfig = {
    path: '/',
    component: 'div',
    indexRoute: {
        component: require('./components/login').default
    },
    childRoutes: [
        {
            path: 'login', // 登录路由
            getComponent(location, callback) {
                require.ensure([], function (require) {
                    callback(null, require('./components/login').default)
                })
            }
        }, 
        {
            path: '',
            component: require('./app').default,
            getChildRoutes(location, callback) {
                require
                    .ensure([], function (require) {
                        callback(null, [
                            require('./components/users').default,
                            require('./components/books').default,
                            require('./components/system').default,
                            require('./components/messages').default
                        ])
                    })
            }
        }
    ]
};
ReactDOM.render(
    <Router history={browserHistory} routes={routeConfig}/>,
    document.getElementById('app')
);
