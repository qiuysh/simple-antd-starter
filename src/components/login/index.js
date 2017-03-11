import React from 'react';
import {Form, Input, Icon, Button} from 'antd';
import { browserHistory } from 'react-router'
import './login.css';
const FormItem = Form.Item;

let Login = React.createClass({

    getInitialState() {

        return {};
    },

    handleSubmit(e) {
        e.preventDefault();
        let forms = this.props.form.getFieldsValue();
        setTimeout(function () {
            localStorage.username = forms.username;
            localStorage.password = forms.password;
            browserHistory.push('/home')
        }, 2000)
    },

    render() {

        const { getFieldProps } = this.props.form;

        const formItemLayout = {
            labelCol: {span: 3},
            wrapperCol: {span: 21},
        };

        return (
            <div className="login-wrapper">
                <div className="login-form">
                    <h1>Sign in</h1>
                    <Form horizontal>
                        <FormItem
                            {...formItemLayout}
                            label="账户">
                            <Input {...getFieldProps('username')} placeholder="请输入账号"/>
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="密码">
                            <Input {...getFieldProps('password')} placeholder="请输入密码"/>
                        </FormItem>
                        <FormItem>
                            <Button onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    },
});
Login = Form.create()(Login);
export default Login;