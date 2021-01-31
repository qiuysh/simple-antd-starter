/** @format */

import React from "react";
import { Chart, Interval } from "bizcharts";

export interface iBarProps {
  options: object;
  data: Array<{
    x: string;
    y: number;
  }>;
}

export default class Bar extends React.Component<
  iBarProps,
  {}
> {
  public render() {
    const { options, data } = this.props;
    return (
      <Chart
        data={data}
        height={300}
        padding="auto"
        autoFit>
        <Interval position="x*y" />
      </Chart>
    );
  }
}
