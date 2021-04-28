/** @format */
import * as React from "react";
import { Statistic } from "antd";
import FallOutlined from "@ant-design/icons/FallOutlined";
import RiseOutlined from "@ant-design/icons/RiseOutlined";
import "../style.less";

interface iFlipCardProps {
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

const FlipCard: React.FC<iFlipCardProps> = props => {
  const { options, data } = props;
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
            prefix === "up" ? (
              <RiseOutlined />
            ) : (
              <FallOutlined />
            )
          ) : (
            prefix
          )
        }
        suffix={suffix || "%"}
      />
    </div>
  );
};

export default FlipCard;
