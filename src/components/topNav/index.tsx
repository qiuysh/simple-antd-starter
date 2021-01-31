/** @format */

import React from "react";
import { Layout, Modal } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./style.less";

const { Header } = Layout;
const { confirm } = Modal;

interface iProps {
  collapsed: boolean;
  changeCollapse: () => void;
}

export default function TopNav({
  collapsed = false,
  changeCollapse,
}: iProps) {
  return (
    <Header className="yux-header">
      <a
        className="trigger"
        onClick={() => changeCollapse()}>
        {collapsed ? (
          <MenuFoldOutlined />
        ) : (
          <MenuUnfoldOutlined />
        )}
      </a>
      <a className="logout" onClick={onLogout}>
        <UserOutlined />
      </a>
    </Header>
  );
}

function onLogout() {
  confirm({
    title: "注销",
    content: "是否要退出当前账号？",
    okText: "确认",
    cancelText: "取消",
    onOk: () => {
      localStorage.removeItem("token");
      window.location.href = "/login";
    },
    onCancel() {},
  });
}
