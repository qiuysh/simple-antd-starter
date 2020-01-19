/** @format */

import * as React from "react";
import { Result, Icon, Button } from "antd";

export default function PageNotFound(): JSX.Element {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary">返回主页</Button>}
    />
  );
}
