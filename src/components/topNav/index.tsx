/** @format */

import React, { FC } from "react";
import { Layout } from "antd";
import MenuFoldOutlined from "@ant-design/icons/MenuFoldOutlined";
import MenuUnfoldOutlined from "@ant-design/icons/MenuUnfoldOutlined";
import UseBar from "./useBar";
import "./style.less";

const { Header } = Layout;

interface iProps {
  collapsed: boolean;
  changeCollapse: (collapsed: boolean) => void;
}

const TopNav: FC<iProps> = props => {
  const { collapsed = false, changeCollapse } = props;
  return (
    <Header className="yux-header">
      <a
        className="trigger"
        onClick={() => changeCollapse(!collapsed)}>
        {collapsed ? (
          <MenuFoldOutlined />
        ) : (
          <MenuUnfoldOutlined />
        )}
      </a>
      <UseBar />
    </Header>
  );
};

export default TopNav;
