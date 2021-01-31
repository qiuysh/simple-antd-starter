/** @format */

import React from "react";
import { Chart, LineAdvance } from "bizcharts";

export interface iLineProps {
  options: object;
  data: Array<{
    x: string;
    y: number;
  }>;
}

export default class Line extends React.Component<
  iLineProps,
  {}
> {
  public render() {
    const { options, data } = this.props;
    return (
      <div>
        <Chart
          data={data}
          height={300}
          padding="auto"
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
  }
}
