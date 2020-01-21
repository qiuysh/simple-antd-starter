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

const TITLE: string = "No Body";

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
      <React.Fragment>
        <DocumentTitle title={TITLE}>
          <Layout>
            <SiderMenu
              collapsed={collapsed}
              history={history}
            />
            <Layout>
              <TopNav
                collapsed={collapsed}
                changeCollapse={this.changeCollapse}
              />
              <Content
                style={{
                  margin: "24px 24px 0",
                  minHeight: this.getViewPortHeight() - 154,
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
