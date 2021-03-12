/** @format */

import React from "react";
import { Card } from "antd";
import { Flipper, Bar, Line } from "@components/charts";

interface dataArray {
  data: Array<{
    x: string;
    y: number;
  }>;
}

interface dataObject {
  data: {
    value: number;
    prefix?: string;
    suffix?: string;
  };
}

type iChartProps = {
  type: string;
  options: {
    title: string;
    isMom?: boolean;
    [key: string]: any;
  };
  data: dataArray | dataObject | any;
};

function Chart({
  type,
  options,
  data,
}: iChartProps): JSX.Element {
  let element: JSX.Element = <div>暂无图表</div>;
  switch (type) {
    case "flipcard": {
      element = <Flipper options={options} data={data} />;
      break;
    }
    case "bar": {
      element = <Bar options={options} data={data} />;
      break;
    }
    case "line": {
      element = <Line options={options} data={data} />;
      break;
    }
    default:
  }
  return element;
}

const RenderChart: React.FC<iChartProps> = params => {
  const { type, options } = params;
  return (
    <Card title={type != "flipcard" ? options.title : ""}>
      <Chart {...params} />
    </Card>
  );
};

export default RenderChart;
