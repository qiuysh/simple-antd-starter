/**
 * Created by qiuyishu on 16/12/11.
 */
import React, { Component } from 'react';
import { Form, Input, Icon, Button, Table } from 'antd';
const FormItem = Form.Item;

class Users extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        const columns = [
            {title: '用户名', dataIndex: 'name'},
            {title: '账号', dataIndex: 'account'},
            {title: '电话', dataIndex: 'phone'},
            {title: '状态', dataIndex: 'status'},
        ];
        return (
            <div>
                <div className="search-tools">
                    <Form inline>
                        <FormItem label="账号">
                            <Input />
                        </FormItem>
                        <FormItem >
                            <Button>查询</Button>
                        </FormItem>
                    </Form>
                </div>
                <Table columns={columns} />
            </div>       
        )
    }

}
export default Users;