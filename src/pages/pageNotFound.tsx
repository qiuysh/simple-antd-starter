/** @format */

import React from "react";
import { Result, Button } from "antd";

const PageNotFound: React.FC = () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary">返回主页</Button>}
    />
  );
};

export default PageNotFound;
