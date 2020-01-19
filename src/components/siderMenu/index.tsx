/** @format */

import * as React from "react";
import { Menu, Icon, Layout } from "antd";
import { Link } from "react-router-dom";
import Logo from "../logo";
const { Sider } = Layout;

interface iProps {
  collapsed: boolean;
}

export default function SiderMenu({
  collapsed,
}: iProps): JSX.Element {
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Logo collapsed={collapsed} />
      <Menu
        mode="inline"
        theme="dark"
        defaultSelectedKeys={["dashboard"]}>
        <Menu.Item key="dashboard">
          <Link to="/dashboard">
            <Icon type="area-chart" />
            <span>仪表盘</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="table">
          <Link to="/table">
            <Icon type="table" />
            <span>表格页</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="form">
          <Link to="/form">
            <Icon type="form" />
            <span>表单页</span>
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
