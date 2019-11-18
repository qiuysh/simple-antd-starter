import * as React from "react";
import * as ReactDOM from "react-dom";
import { ConfigProvider } from 'antd';
import BasicRouter from "./router";
import 'antd/dist/antd.less';


ReactDOM.render(
  <ConfigProvider>
    <BasicRouter />
  </ConfigProvider>,
  document.getElementById('app')
);
