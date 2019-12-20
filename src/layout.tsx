/** @format */

import React from "react";
import { Layout } from "antd";
import { withRouter } from "react-router-dom";
import TopNav from "./components/topNav";
import DocumentTitle from "react-document-title";
import SiderMenu from "./components/siderMenu";
import Footer from "./components/footer";
import "antd/dist/antd.less";
import "./assets/css/index.less";
const { Content } = Layout;
const TITLE = "系统";

class BaseLayout extends React.Component<any> {
  state = {
    collapsed: false,
  };

  changeCollapse = () => {
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
                {this.props.children}
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
