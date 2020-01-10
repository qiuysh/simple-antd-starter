/** @format */

import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

export default function FooterBar(): JSX.Element {
  return (
    <Footer style={{ textAlign: "center" }}>
      Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
    </Footer>
  );
}
