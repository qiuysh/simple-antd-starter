/** @format */

import * as React from "react";
import { Form, Input, Icon, Checkbox, Button } from "antd";
import * as ajax from "./services";
import "./login.less";
const FormItem = Form.Item;

export interface Props {
  history: any;
  form: any;
}

const Login = ({ history, form }: Props): JSX.Element => {
  const { getFieldDecorator } = form;
  return (
    <div className="login-wrapper">
      <div className="login-form">
        <h1>react_System</h1>
        <Form>
          <FormItem>
            {getFieldDecorator("username")(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder="账号"
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password")(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                type="password"
                placeholder="密码"
              />,
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

function handleSubmit(e: React.FormEvent, history: any, form: any) {
  e.preventDefault();
  let param: any = form.getFieldsValue();
  // ajax.login(param).then(res => {
  //   console.log(res);
  // });
  setTimeout(() => {
    localStorage.username = param.username;
    localStorage.password = param.password;
    localStorage.token = "snifoewoidnISOoifnewodrey6454e3_fdsd";
    history.push("/dashboard");
  }, 1000);
}

export default Form.create()(Login);
