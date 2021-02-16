/** @format */

import React, { FC } from "react";
import { Modal, Avatar, Menu } from "antd";
import {
  BellOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./style.less";

const { confirm } = Modal;

const UseBar: FC<{}> = () => {
  return (
    <Menu className="yux-usebar f-fr">
      <Menu.Item>
        <a className="use-item logout" onClick={onLogout}>
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        </a>
      </Menu.Item>
      <Menu.Item>
        <a className="use-item message">
          <BellOutlined />
        </a>
      </Menu.Item>
    </Menu>
  );
};

export default UseBar;

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
