import React from 'react';
import { Menu, Breadcrumb, Icon, Tabs } from 'antd';
import './assets/css/common.css';
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;

const App = React.createClass({

  getInitialState() {
    this.newTabIndex = 0;
    const panes = [
      { title: '导航1', content: 'Content of Tab Pane 1', key: '1' },
    ];
    return {
      collapse: true,
      activeKey: panes[0].key,
      panes,
    };
  },
  onCollapseChange() {
    this.setState({
      collapse: !this.state.collapse,
    })
  },

  onChange(activeKey) {
    this.setState({ activeKey });
  },

  add() {
    const panes = this.state.panes;
    const activeKey = `newTab${this.newTabIndex++}`;
    panes.push({ title: 'New Tab', content: 'New Tab Pane', key: activeKey });
    this.setState({ panes, activeKey });
  },
  onEdit(targetKey, action) {
    this[action](targetKey);
  },
  remove(targetKey) {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  },
  render() {
    const collapse = this.state.collapse;
    return (
      <div className={collapse ? "ant-layout-aside ant-layout-aside-collapse" : "ant-layout-aside"}>
        <aside className="ant-layout-sider">
          <div className="ant-layout-logo"></div>
          <Menu mode="inline" theme="dark" defaultSelectedKeys={['user']}
                onClick={this.add}
          >
            <Menu.Item key="user">
              <Icon type="user" /><span className="nav-text">导航一</span>
            </Menu.Item>
            <Menu.Item key="setting">
              <Icon type="setting" /><span className="nav-text">导航二</span>
            </Menu.Item>
            <Menu.Item key="laptop">
              <Icon type="laptop" /><span className="nav-text">导航三</span>
            </Menu.Item>
            <Menu.Item key="notification">
              <Icon type="notification" /><span className="nav-text">导航四</span>
            </Menu.Item>
            <Menu.Item key="folder">
              <Icon type="folder" /><span className="nav-text">导航五</span>
            </Menu.Item>
          </Menu>
          <div className="ant-aside-action" onClick={this.onCollapseChange}>
            {collapse ? <Icon type="right" /> : <Icon type="left" />}
          </div>
        </aside>
        <div className="ant-layout-main">
          <div className="ant-layout-header"></div>
          <div className="ant-layout-container">
            <div className="ant-layout-content">
              <div style={{ height: 500 }}>
                <Tabs
                  hideAdd
                  onChange={this.onChange}
                  activeKey={this.state.activeKey}
                  type="editable-card"
                  onEdit={this.onEdit}>
                  {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key}>{pane.content}</TabPane>)}
                </Tabs>
              </div>
            </div>
          </div>
          <div className="ant-layout-footer">
            Ant Design 版权所有 © 2015 由蚂蚁金服体验技术部支持
          </div>
        </div>
      </div>
    );
  },
});

export default App;