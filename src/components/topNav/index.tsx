/** @format */

import React, { FC } from "react";
import { Layout } from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import UseBar from "./useBar";
import "./style.less";

const { Header } = Layout;

interface iProps {
  collapsed: boolean;
  changeCollapse: () => void;
}

const TopNav: FC<iProps> = props => {
  const { collapsed = false, changeCollapse } = props;
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
      <UseBar />
    </Header>
  );
};

export default TopNav;
