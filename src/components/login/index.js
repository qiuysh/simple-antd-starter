import React from 'react';
import {Form, Input, Icon, Button} from 'antd';
import { browserHistory } from 'react-router'
import './login.less';
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
            localStorage.token = 'snifoewoidnISOoifnewodrey6454e3_fdsd'
            browserHistory.push('/users')
        }, 1000)
    },

    render() {

        const { getFieldProps } = this.props.form;

        return (
            <div className="login-wrapper">
                <div className="login-form">
                    <h1>react_System</h1>
                    <Form horizontal>
                        <FormItem>
                            <Input {...getFieldProps('username')} placeholder="请输入账号"/>
                        </FormItem>
                        <FormItem>
                            <Input {...getFieldProps('password')} placeholder="请输入密码"/>
                        </FormItem>
                        <FormItem>
                            <Button className="btn btn-priame" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    },
});
Login = Form.create()(Login);
export default Login;