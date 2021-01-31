/** @format */

import React from "react";
import { Result } from "antd";
import isEqual from "lodash/isEqual";

/**
 * @description 错误边界捕捉组件
 * @author wulin
 * @date 2020-12-24
 * @export
 * @class ErrorBoundary
 * @extends {React.Component<any>}
 */
interface IProps {
  location: unknown;
  children: unknown;
}
interface IStates {
  hasError: boolean;
}
export default class ErrorBoundary extends React.Component<
  IProps,
  IStates
> {
  constructor(props: IProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidUpdate(prevProps: IProps) {
    const { hasError } = this.state;
    const { location } = this.props;
    if (
      hasError &&
      !isEqual(location, prevProps.location)
    ) {
      this.setState({
        hasError: false,
      });
    }
  }

  // componentDidCatch(error: unknown, errorInfo: unknown) {
  // 你同样可以将错误日志上报给服务器
  // console.log(error, errorInfo);
  // }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // 你可以自定义降级后的 UI 并渲染

      return <Result />;
    }

    return children;
  }
}
