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

/**
 * 获取内容高度
 */
export function getViewPortHeight() {
  return Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0,
  );
}
