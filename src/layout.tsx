/** @format */

import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import { withRouter } from "react-router-dom";
import DocumentTitle from "react-document-title";
import classnames from "classnames";
import TopNav from "@components/topNav";
import SiderMenu from "@components/siderMenu";
import Footer from "@components/footer";
import ErrorBoundary from "@components/errorBoundary";
import { getViewPortHeight } from "@utils/util";
import * as ajax from "./services";
import "./assets/styles/global.less";

const { Content } = Layout;

const TITLE: string = "wolin 3C";

interface iLayoutProps {
  history: any;
  children: any;
  [key: string]: any;
}

const BaseLayout: React.FC<iLayoutProps> = props => {
  const { children, history } = props;
  const [collapsed, changeCollapse] = useState<boolean>(
    false,
  );
  const [menuList, setData] = useState<
    Array<{ [key: string]: any }>
  >([]);

  useEffect(() => {
    QueryMenu();
  }, []);

  // 获取导航菜单列表
  const QueryMenu = async () => {
    const res: any = await ajax.getNavigation();
    if (res.result) {
      setData(res.data);
    }
  };

  return (
    <>
      <DocumentTitle title={TITLE}>
        <Layout
          className={classnames("", {
            "layout-fixed": true,
          })}>
          <SiderMenu
            collapsed={collapsed}
            history={history}
            menuList={menuList}
          />
          <Layout className="yux-content">
            <TopNav
              collapsed={collapsed}
              changeCollapse={changeCollapse}
            />
            <Content
              style={{
                margin: "24px 24px 0",
                minHeight: getViewPortHeight() - 154,
              }}>
              <ErrorBoundary location={location}>
                {children}
              </ErrorBoundary>
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </DocumentTitle>
    </>
  );
};
export default withRouter(BaseLayout);
