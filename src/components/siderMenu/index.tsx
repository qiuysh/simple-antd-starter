/** @format */

import * as React from "react";
import { Menu, Icon, Layout } from "antd";
import Logo from "../logo";
import * as ajax from "../../services";
const { Sider } = Layout;

interface iProps {
  history: any;
  collapsed: boolean;
}

export default function SiderMenu({
  history,
  collapsed,
}: iProps): JSX.Element {
  const { location, push } = history;
  const { pathname } = location;
  // 初始化
  let initActiveKey: string = pathname.replace("/", "");

  const [activeKey, setActive] = React.useState(
    initActiveKey,
  );
  const [menuList, setData] = React.useState([]);

  // 获取导航菜单列表
  const QueryMenu = async () => {
    const res: any = await ajax.getNavigation();
    if (res.result) {
      setData(res.data);
    }
  };

  React.useEffect(() => {
    QueryMenu();
  }, []);

  const handleClick = (e: any): void => {
    const { key } = e;
    const targetMenu: any = menuList.find(
      (o: any) => key === o.code,
    );
    if (targetMenu) {
      setActive(targetMenu.code);
      push(targetMenu.path);
    }
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Logo collapsed={collapsed} />
      <Menu
        mode="inline"
        theme="dark"
        onClick={handleClick}
        selectedKeys={[activeKey]}>
        {menuList.map(
          (item: any): JSX.Element => {
            return (
              <Menu.Item key={item.code}>
                <Icon type={item.icon} />
                <span>{item.name}</span>
              </Menu.Item>
            );
          },
        )}
      </Menu>
    </Sider>
  );
}
