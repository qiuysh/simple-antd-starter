/** @format */

export function redirectToLogin(nextState: any, replace: any) {
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
