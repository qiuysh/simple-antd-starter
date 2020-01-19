/** @format */

import * as React from "react";
import { Row, Col } from "antd";
import RenderCard from "./renderCard";

export default class DashBoardComponent extends React.Component<
  any
> {
  render() {
    return (
      <div>
        <Row gutter={20}>
          <Col span={6}>
            <RenderCard
              type="flipcard"
              options={{ title: "销售额", isMom: false }}
              data={{
                prefix: "$",
                value: 11.98,
                suffix: "亿",
              }}
            />
          </Col>
          <Col span={6}>
            <RenderCard
              type="flipcard"
              options={{
                title: "销售额增长率",
                isMom: true,
              }}
              data={{ prefix: "up", value: 11.98 }}
            />
          </Col>
          <Col span={6}>
            <RenderCard
              type="flipcard"
              options={{ title: "成本降低率", isMom: true }}
              data={{ prefix: "down", value: 5.08 }}
            />
          </Col>
          <Col span={6}>
            <RenderCard
              type="flipcard"
              options={{ title: "客户量", isMom: false }}
              data={{
                prefix: "",
                value: 11908.29,
                suffix: "万",
              }}
            />
          </Col>
        </Row>
        <Row gutter={20} style={{ marginTop: 20 }}>
          <Col span={24}>
            <RenderCard
              type="bar"
              options={{ title: "增长量" }}
              data={[
                { x: "类目一", y: 332 },
                { x: "类目二", y: 233 },
                { x: "类目三", y: 733 },
                { x: "类目四", y: 163 },
                { x: "类目五", y: 209 },
              ]}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
