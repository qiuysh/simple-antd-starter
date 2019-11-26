/**
 * Created by qiuyishu on 17/2/16.
 *
 * @format
 */

export function redirectToLogin(nextState, replace) {
  if (!loggedIn()) {
    replace({
      pathname: "/login",
      state: { nextPathname: nextState.location.pathname },
    });
  }
}

export function loggedIn() {
  return !!localStorage.token;
}
