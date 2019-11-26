/** @format */

import * as React from "react";
import { Icon, Layout, Modal } from "antd";
const { Header } = Layout;
const confirm = Modal.confirm;

export interface Props {
  collapsed: boolean;
  changeCollapse: () => void;
}

export default function TopNav({ collapsed, changeCollapse }: Props) {
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
  let token = localStorage.getItem("token");
  confirm({
    title: "注销",
    content: "是否要退出当前账号？",
    onOk: () => {
      if (token) {
        localStorage.removeItem("token");
        window.location.href = "/#/login";
      }
    },
    onCancel() {},
  });
}
