/** @format */

import React from "react";
import { Layout } from "antd";
import { withRouter } from "react-router-dom";
import DocumentTitle from "react-document-title";
import classnames from "classnames";
import TopNav from "@components/topNav";
import SiderMenu from "@components/siderMenu";
import Footer from "@components/footer";
import ErrorBoundary from "@components/errorBoundary";
import "./assets/styles/global.less";

const { Content } = Layout;

const TITLE: string = "wolin 3C";

type iLayoutStates = {
  collapsed: boolean;
};

class BaseLayout extends React.Component<
  any,
  iLayoutStates
> {
  state: iLayoutStates = {
    collapsed: false,
  };

  changeCollapse = (): void => {
    let { collapsed } = this.state;
    collapsed = !collapsed;
    this.setState({
      collapsed,
    });
  };

  getViewPortHeight() {
    return Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0,
    );
  }

  render() {
    const { collapsed } = this.state;
    const { children, history } = this.props;
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
            />
            <Layout className="yux-content">
              <TopNav
                collapsed={collapsed}
                changeCollapse={this.changeCollapse}
              />
              <Content
                style={{
                  margin: "24px 24px 0",
                  minHeight: this.getViewPortHeight() - 154,
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
  }
}

export default withRouter(BaseLayout);
