/** @format */

export function isLogined(nextState: any, replace: any) {
  if (!loggedIn()) {
    replace({
      pathname: "/login",
    });
  }
}

export function loggedIn() {
  return !!localStorage.token;
}
