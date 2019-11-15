import * as React from 'react';
import { Menu, Icon, Layout } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

export default function SiderMenu(props) {

  const { collapsed } = props;

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="logo" style={{height: 64}}>logo</div>
      <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}>
        <Menu.Item key="user">
          <Link to="/users">
            <Icon type="user"/>
            <span>用户管理</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="notification">
          <Link to="/messages">
            <Icon type="notification"/>
            <span>消息管理</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="folder">
          <Link to="/books">
            <Icon type="folder"/>
            <span>书籍管理</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="setting">
          <Link to="/system">
            <Icon type="setting"/>
            <span>系统设置</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  ) 
}