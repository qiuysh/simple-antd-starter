/** @format */

import React from "react";
import { Form, Input, Checkbox, Button } from "antd";
import * as ajax from "./services";
import "./login.less";
const FormItem = Form.Item;

const Login = ({ history, form }) => {
  const { getFieldDecorator } = form;
  return (
    <div className="login-wrapper">
      <div className="login-form">
        <h1>react_System</h1>
        <Form>
          <FormItem label="用户">
            {getFieldDecorator("username")(<Input placeholder="admin" />)}
          </FormItem>
          <FormItem label="密码">
            {getFieldDecorator("password")(
              <Input type="password" placeholder="admin" />,
            )}
          </FormItem>
          <FormItem>
            <Checkbox>记住密码</Checkbox>
            <a className="login-form-forgot" href="">
              忘记密码
            </a>
            <Button
              type="primary"
              htmlType="submit"
              className="btn btn-priame"
              onClick={e => handleSubmit(e, history, form)}>
              登录
            </Button>
            <a>注册</a>
          </FormItem>
        </Form>
      </div>
    </div>
  );
};

function handleSubmit(e: React.FormEvent, history, form) {
  e.preventDefault();
  const param = form.getFieldsValue();
  // ajax.login(param).then(res => {
  //   console.log(res);
  // });
  setTimeout(() => {
    localStorage.username = param.username;
    localStorage.password = param.password;
    localStorage.token = "snifoewoidnISOoifnewodrey6454e3_fdsd";
    history.push("/users");
  }, 1000);
}

export default Form.create()(Login);
