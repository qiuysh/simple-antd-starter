/**
 * /*
 *
 * @format
 * @Author: wulin
 * @Date: 2021-02-24 15:54:21
 * @LastEditors: wulin
 * @LastEditTime: 2021-04-28 15:16:31
 * @Description: This is desc
 * @FilePath: /react_system/src/components/charts/bar/index.tsx
 */

/** @format */
import * as React from "react";
import BarChart from "@ant-design/charts/lib/bar";

interface iBarProps {
  options: object;
  data: Array<{
    x: string;
    y: number;
  }>;
}

const Bar: React.FC<iBarProps> = props => {
  const { options, data } = props;
  const config = {
    data,
    xField: "x",
    yField: "y",
  };
  return <BarChart {...config} />;
};

export default Bar;
