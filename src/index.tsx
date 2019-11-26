/** @format */

import * as React from "react";
import * as ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import BasicRouter from "./router";

ReactDOM.render(
  <ConfigProvider locale={{ locale: "zh-cn" }}>
    <BasicRouter />
  </ConfigProvider>,
  document.getElementById("app"),
);
