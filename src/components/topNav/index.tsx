/** @format */

import * as React from "react";
import { Icon, Layout, Modal } from "antd";
const { Header } = Layout;
const confirm = Modal.confirm;

interface iProps {
  collapsed: boolean;
  changeCollapse: () => void;
}

export default function TopNav({
  collapsed = false,
  changeCollapse,
}: iProps) {
  return (
    <Header style={{ padding: "0 24px" }}>
      <Icon
        className="trigger"
        type={collapsed ? "menu-unfold" : "menu-fold"}
        onClick={() => changeCollapse()}
      />
      <div className="logout" onClick={onLogout}>
        <Icon type="user" />
      </div>
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
      window.location.href = "/#/login";
    },
    onCancel() {},
  });
}
