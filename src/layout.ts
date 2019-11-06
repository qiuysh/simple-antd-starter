import * as React from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
// import TopNav from '@/components/topNav';
// import SiderMenu from '@/components/siderMenu';
// import Footer from '@/components/footer';
import 'antd/dist/antd.less';
import './assets/css/index.less';
const { Content } = Layout;

class BaseLayout extends React.Component<any, any> {

  state = {
    collapsed: false
  }
  
  toggle = (collapsed: boolean) => {
    this.setState({
      collapsed
    })
  }
  
  getViewPortHeight() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

  render() {
    const { collapsed } = this.state;
    return (
      <Layout>
      234
      /*
        <SiderMenu collapsed={collapsed} />
        <Layout>
          <TopNav 
            collapsed={collapsed} 
            toggle={this.toggle}
          />
          <Content style={{ margin: '24px 24px 0', height: this.getViewPortHeight() - 100 }}>
            {this.props.children}
          </Content>
          <Footer /> 
        </Layout>*/
      </Layout>
    );
  }
};

export default withRouter(BaseLayout);