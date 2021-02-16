/** @format */

import React from "react";
import { Chart, LineAdvance } from "bizcharts";

interface iLineProps {
  options: object;
  data: Array<{
    x: string;
    y: number;
  }>;
}

const Line: React.FC<iLineProps> = props => {
  const { options, data } = props;
  return (
    <div>
      <Chart
        data={data}
        height={300}
        padding="auto"
        appendPadding={[20, 0, 0, 30]}
        autoFit>
        <LineAdvance
          shape="smooth"
          point
          area
          position="x*y"
        />
      </Chart>
    </div>
  );
};

export default Line;
