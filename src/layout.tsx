/** @format */

import * as React from "react";
import { Layout } from "antd";
import { withRouter } from "react-router-dom";
import DocumentTitle from "react-document-title";
import TopNav from "@components/topNav";
import SiderMenu from "@components/siderMenu";
import Footer from "@components/footer";
import "./assets/css/index.less";
const { Content } = Layout;

const TITLE: string = "系统";

type layoutStates = {
  collapsed: boolean;
};

class BaseLayout extends React.Component<any, layoutStates> {
  state: layoutStates = {
    collapsed: false,
  };

  changeCollapse = (): void => {
    let collapsed: boolean = this.state.collapsed;
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
    const { children } = this.props;
    return (
      <React.Fragment>
        <DocumentTitle title={TITLE}>
          <Layout>
            <SiderMenu collapsed={collapsed} />
            <Layout>
              <TopNav
                collapsed={collapsed}
                changeCollapse={this.changeCollapse}
              />
              <Content
                style={{
                  margin: "24px 24px 0",
                  height: this.getViewPortHeight() - 100,
                }}>
                {children}
              </Content>
              <Footer />
            </Layout>
          </Layout>
        </DocumentTitle>
      </React.Fragment>
    );
  }
}

export default withRouter(BaseLayout);
