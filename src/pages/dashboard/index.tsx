/** @format */

import * as React from "react";
import { Card, Row, Col, Icon, Statistic } from "antd";

export default class DashBoardComponent extends React.Component<any> {
  render() {
    return (
      <div>
        <Row gutter={20}>
          <Col span={6}>
            <RenderCard />
          </Col>
          <Col span={6}>
            <RenderCard />
          </Col>
          <Col span={6}>
            <RenderCard />
          </Col>
          <Col span={6}>
            <RenderCard />
          </Col>
        </Row>
        <Row gutter={20} style={{ marginTop: 20 }}>
          <Col span={24}>
            <RenderCard />
          </Col>
        </Row>
      </div>
    );
  }
}

function RenderCard(): JSX.Element {
  return (
    <Card>
      <Statistic
        title="Active"
        value={11.28}
        precision={2}
        valueStyle={{ color: "#3f8600" }}
        prefix={<Icon type="arrow-up" />}
        suffix="%"
      />
    </Card>
  );
}
