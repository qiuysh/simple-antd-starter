import * as React from 'react';
import { Icon, Layout, Modal } from 'antd';
const { Header } = Layout;
const confirm = Modal.confirm;

export interface TopNavProps {
  collapsed: boolean,
  toggle: void
}

export default class TopNav extends React.Component <TopNavProps, {}> {

  onLogout() {
    let token = localStorage.getItem('token');
    confirm({
      title: '注销',
      content: '是否要退出当前账号？',
      onOk() {
        if (token) {
          localStorage.removeItem('token');
          this.props.history.push('/login');
        }
      },
      onCancel() {},
    });
    
  }

  render() {
    const { collapsed, toggle } = this.props;
    return (
      <Header style={{ padding: '0 24px' }}>
        <Icon
          className="trigger"
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={() => toggle(!collapsed)}
        />
        <div className="logout" onClick={this.onLogout}>
          <Icon type="user" />
        </div>
      </Header>
    ) 
  }
}
