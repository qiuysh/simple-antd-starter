/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import BasicRouter from "./router";
import zhCN from "antd/es/locale/zh_CN";

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <BasicRouter />
  </ConfigProvider>,
  document.getElementById("app"),
);
