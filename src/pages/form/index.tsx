/** @format */

import React from "react";
import { Form, Input, Row, Col, Button } from "antd";
import "./style.less";
const FormItem = Form.Item;

class FormComponent extends React.Component<any> {
  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <div className="form-content">
        <Form layout="inline">
          <Row>
            <Col span={24}>
              <FormItem label="登记名称">
                {getFieldDecorator("name")(<Input />)}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <FormItem label="性别">
                {getFieldDecorator("age")(<Input />)}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <Col span={12} offset={8}>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
export default Form.create()(FormComponent);
