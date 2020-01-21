/** @format */

import * as React from "react";
import {
  Form,
  Input,
  Icon,
  Checkbox,
  Button,
  message,
} from "antd";
import * as ajax from "./services";
import "./login.less";
const FormItem = Form.Item;

export interface iLoginProps {
  history: any;
  form: any;
}

const Login = ({
  history,
  form,
}: iLoginProps): JSX.Element => {
  const { getFieldDecorator } = form;
  return (
    <div className="login-wrapper">
      <div className="login-form">
        <h1>No Body</h1>
        <Form>
          <FormItem>
            {getFieldDecorator("username")(
              <Input
                prefix={
                  <Icon
                    type="user"
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
                placeholder="账号"
              />,
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator("password")(
              <Input
                prefix={
                  <Icon
                    type="lock"
                    style={{ color: "rgba(0,0,0,.25)" }}
                  />
                }
                type="password"
                placeholder="密码"
              />,
            )}
          </FormItem>
          <FormItem>
            {/* <Checkbox>记住密码</Checkbox>
            <a className="login-form-forgot" href="">
              忘记密码
            </a> */}
            <Button
              type="primary"
              htmlType="submit"
              className="btn btn-priame"
              onClick={e => handleSubmit(e, history, form)}>
              登录
            </Button>
            {/* <a>注册</a> */}
          </FormItem>
        </Form>
      </div>
    </div>
  );
};

function handleSubmit(
  e: React.FormEvent,
  history: any,
  form: any,
) {
  e.preventDefault();
  let param: any = form.getFieldsValue();
  ajax.login(param).then((res: any) => {
    let isLoginSuccess: Boolean = res.result;
    if (isLoginSuccess) {
      localStorage.setItem("token", res.token);
      history.push("/dashboard");
    } else {
      message.error(res.result_message);
    }
  });
}

export default Form.create()(Login);
