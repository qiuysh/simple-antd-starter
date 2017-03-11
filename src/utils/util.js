/**
 * Created by qiuyishu on 17/2/16.
 */

const Utils = {


    redirectToLogin(nextState, replace) {
        if (!Utils.loggedIn()) {
            replace({
                pathname: '/login',
                state: { nextPathname: nextState.location.pathname }
            })
        }
    },

    loggedIn: function () {
        return !!localStorage.token
    },

};

export default Utils;