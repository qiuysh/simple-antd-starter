/** @format */

import React from "react";
import { Menu, Icon, Layout } from "antd";
import { Link } from "react-router-dom";
const { Sider } = Layout;

interface Props {
  collapsed: boolean;
}

export default function SiderMenu({ collapsed }: Props): JSX.Element {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo" style={{ height: 64 }}>
        logo
      </div>
      <Menu mode="inline" theme="dark" defaultSelectedKeys={["dashboard"]}>
        <Menu.Item key="dashboard">
          <Link to="/dashboard">
            <Icon type="user" />
            <span>仪表盘</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="notification">
          <Link to="/table">
            <Icon type="notification" />
            <span>表格页</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="folder">
          <Link to="/form">
            <Icon type="folder" />
            <span>表单页</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="setting">
          <Link to="/setting">
            <Icon type="setting" />
            <span>设置页</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
