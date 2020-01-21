/** @format */

import * as React from "react";
import { Chart, Axis, Tooltip, Geom } from "bizcharts";

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
          forceFit>
          <Axis name="x" />
          <Axis name="y" />
          <Tooltip />
          <Geom type="line" position="x*y" />
        </Chart>
      </div>
    );
  }
}
