import React, { Component } from 'react';
import { Link } from 'react-router';
import { browserHistory } from 'react-router';
import { Menu, Icon, Modal } from 'antd';
import './assets/css/common.less';
const confirm = Modal.confirm;

class App extends Component {
  
  constructor(props) {
      super(props);
      this.state = {
          collapse: true,
      };
  }

  onCollapseChange() {
      this.setState({
          collapse: !this.state.collapse,
      })
  }

  onLogout() {
    let token = localStorage.getItem('token');
    confirm({
      title: '注销',
      content: '是否要退出当前账号？',
      onOk() {
        if (token) {
          localStorage.removeItem('token');
          browserHistory.push('/login');
        }
      },
      onCancel() {},
    });
    
  }

  render() {
    const collapse = this.state.collapse;
    return (
      <div className={collapse ? "ant-layout-aside ant-layout-aside-collapse" : "ant-layout-aside"}>
          <aside className="ant-layout-sider">
            <div className="ant-layout-logo"></div>
            <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}>
              <Menu.Item key="user">
                <Icon type="user"/>
                  {!collapse && <span className="nav-text"><Link to="/users">用户管理</Link></span>}
              </Menu.Item>
              <Menu.Item key="notification">
                <Icon type="notification"/>
                  {!collapse && <span className="nav-text"><Link to="/message">消息管理</Link></span>}
              </Menu.Item>
              <Menu.Item key="folder">
                <Icon type="folder"/>
                  {!collapse && <span className="nav-text"><Link to="/books">书籍管理</Link></span>}
              </Menu.Item>
              <Menu.Item key="setting">
                <Icon type="setting"/>
                  {!collapse && <span className="nav-text"><Link to="/system">系统设置</Link></span>}
              </Menu.Item>
            </Menu>
          </aside>
          <div className="ant-layout-main">
            <div className="ant-layout-header">
              <div className="ant-aside-action" onClick={this.onCollapseChange.bind(this)}>
                {collapse ? <Icon type="menu-unfold" />: <Icon type="menu-fold" />}
              </div>
              <div className="ant-aside-logout" onClick={this.onLogout.bind(this)}><Icon type="logout" /></div>
            </div>
            <div className="ant-layout-container">
              <div className="ant-layout-content">
                <div style={{ height: 520 }}>
                  {this.props.children}
                </div>
              </div>
            </div>
            <div className="ant-layout-footer">
              Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
            </div>
          </div>
      </div>
    );
  }
};

export default App;