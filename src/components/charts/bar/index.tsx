/** @format */

import React from "react";
import { Chart, Interval } from "bizcharts";

interface iBarProps {
  options: object;
  data: Array<{
    x: string;
    y: number;
  }>;
}

const Bar: React.FC<iBarProps> = props => {
  const { options, data } = props;
  return (
    <Chart
      data={data}
      height={300}
      padding="auto"
      appendPadding={[20, 0, 0, 30]}
      autoFit>
      <Interval position="x*y" />
    </Chart>
  );
};

export default Bar;
