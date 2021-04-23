/**
 * /*
 *
 * @format
 * @Author: wulin
 * @Date: 2021-02-24 15:54:21
 * @LastEditors: wulin
 * @LastEditTime: 2021-04-20 18:00:18
 * @Description: 折线图组件
 * @FilePath: /react_system/src/components/charts/line/index.tsx
 */

/** @format */

import React from "react";
import LineChart from "@ant-design/charts/lib/line";

interface iLineProps {
  options: object;
  data: Array<{
    x: string;
    y: number;
  }>;
}

const Line: React.FC<iLineProps> = props => {
  const { options, data } = props;
  const config = {
    data,
    xField: "x",
    yField: "y",
  };
  return <LineChart {...config} />;
};

export default Line;
