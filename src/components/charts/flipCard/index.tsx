/** @format */

import * as React from "react";
import { Icon, Statistic } from "antd";
import "../style.less";

export interface iFlipCardProps {
  options: {
    title: string;
    precision?: number;
    style?: object;
    isMom?: boolean;
  };
  data: {
    value: number;
    prefix?: string;
    suffix?: string;
  };
}

export default class FlipCard extends React.Component<
  iFlipCardProps,
  any
> {
  public render() {
    const { options, data } = this.props;
    const { title, precision, isMom } = options;
    const { value, prefix, suffix } = data;
    let color: string = "#333";
    if (isMom) {
      color = prefix === "up" ? "#cf1322" : "#3f8600";
    }
    return (
      <div className="flip-chart">
        <Statistic
          title={title}
          value={value}
          precision={precision || 2}
          valueStyle={{
            color,
          }}
          prefix={
            isMom ? (
              <Icon
                type={
                  isMom && prefix === "up"
                    ? "arrow-up"
                    : "arrow-down"
                }
              />
            ) : (
              prefix
            )
          }
          suffix={suffix || "%"}
        />
      </div>
    );
  }
}
