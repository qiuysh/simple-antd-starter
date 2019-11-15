import * as React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';
import './login.less';
const FormItem = Form.Item;

class Login extends React.Component<{}> {

    handleSubmit(e) {
        e.preventDefault();
        const { form } = this.props;
        const forms = form.getFieldsValue();
        setTimeout(function () {
            localStorage.username = forms.username;
            localStorage.password = forms.password;
            localStorage.token = 'snifoewoidnISOoifnewodrey6454e3_fdsd';
            this.props.history.push('/users');
        }, 1000)
    }

    render() {
        let { form } = this.props;
        const { getFieldDecorator } = form;
        return (
            <div className="login-wrapper">
                <div className="login-form">
                    <h1>react_System</h1>
                    <Form>
                        <FormItem>
                            { getFieldDecorator('username')(
                                <Input placeholder="admin"/>
                            )}
                        </FormItem>
                        <FormItem>
                            { getFieldDecorator('password')(
                                <Input type="password" placeholder="admin"/>
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>记住密码</Checkbox>
                            )}
                            <a className="login-form-forgot" href="">忘记密码</a>
                            <Button type="primary" htmlType="submit" className="btn btn-priame" onClick={this.handleSubmit.bind(this)}>
                            登录
                            </Button>
                            <a href="javascript:;q">注册</a>
                        </FormItem>
                    </Form>
                </div>
            </div>
        );
    }
};

Login = Form.create()(Login);
export default Login;