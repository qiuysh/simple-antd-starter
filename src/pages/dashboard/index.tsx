/** @format */

import React from "react";
import { Row, Col, message } from "antd";
import RenderChart from "./renderChart";
import * as ajax from "./services";

interface iDashboardState {
  reqParams?: object;
  dataSource: {
    line?: Array<{
      x: string;
      y: number;
    }>;
    bar?: Array<{
      x: string;
      y: number;
    }>;
    flipcard: {
      sales?: number;
      grate?: number;
      reduce?: number;
      customers?: number;
    };
  };
}

export default class DashBoard extends React.Component<
  any,
  iDashboardState
> {
  state: iDashboardState = {
    reqParams: {},
    dataSource: {
      flipcard: {
        sales: 0,
        grate: 0,
        reduce: 0,
        customers: 0,
      },
    },
  };

  componentDidMount() {
    this.fetchList();
  }

  fetchList = (): void => {
    let { dataSource } = this.state;
    ajax.getDashboard().then((res: any) => {
      const isSuccessed: boolean = res.result;
      if (isSuccessed) {
        dataSource = res.data;
      } else {
        message.error(res.result_message);
      }
      this.setState({
        dataSource,
      });
    });
  };

  render() {
    const { dataSource } = this.state;
    const { line, bar, flipcard } = dataSource;
    return (
      <div>
        <Row gutter={20}>
          <Col span={6}>
            <RenderChart
              type="flipcard"
              options={{ title: "销售额", isMom: false }}
              data={{
                prefix: "$",
                value: flipcard.sales,
                suffix: "亿",
              }}
            />
          </Col>
          <Col span={6}>
            <RenderChart
              type="flipcard"
              options={{
                title: "销售额增长率",
                isMom: true,
              }}
              data={{ prefix: "up", value: flipcard.grate }}
            />
          </Col>
          <Col span={6}>
            <RenderChart
              type="flipcard"
              options={{ title: "成本降低率", isMom: true }}
              data={{
                prefix: "down",
                value: flipcard.reduce,
              }}
            />
          </Col>
          <Col span={6}>
            <RenderChart
              type="flipcard"
              options={{ title: "客户量", isMom: false }}
              data={{
                prefix: "",
                value: flipcard.customers,
                suffix: "万",
              }}
            />
          </Col>
        </Row>
        <Row gutter={20} style={{ marginTop: 20 }}>
          <Col span={12}>
            <RenderChart
              type="line"
              options={{ title: "历年趋势" }}
              data={line}
            />
          </Col>
          <Col span={12}>
            <RenderChart
              type="bar"
              options={{ title: "本年度季度销售额情况" }}
              data={bar}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
