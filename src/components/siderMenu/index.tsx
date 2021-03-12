/** @format */

import React, { useEffect, FC } from "react";
import { Menu, Layout } from "antd";
import CustomIcon from "@components/customIcon";
import Logo from "../logo";

const { Sider } = Layout;

interface iProps {
  history: any;
  collapsed: boolean;
  menuList: Array<{ [key: string]: any }>;
}

interface iMenuProps {
  id: number;
  pid: number;
  name: string;
  icon: string;
  url: string;
  code: string;
  [key: string]: any;
}

const SiderMenu: FC<iProps> = props => {
  const { history, collapsed, menuList } = props;
  const { location, push } = history;
  const { pathname } = location;
  const [activeKey, setActive] = React.useState<
    string | null
  >();

  useEffect(() => {
    initialActiveKey();
  }, []);

  // 初始化
  const initialActiveKey = (): void => {
    if (menuList && menuList.length) {
      const firstActiveMenu:
        | iMenuProps
        | undefined
        | object =
        pathname === "/"
          ? menuList[0]
          : {
              code: pathname.replace("/", ""),
            };
      setActive(firstActiveMenu.code);
    }
  };

  const handleClick = (e: any): void => {
    const { key } = e;
    const targetMenu:
      | iMenuProps
      | undefined = menuList.find(
      (o: any) => key === o.code,
    );
    if (targetMenu) {
      setActive(key);
      push(targetMenu.url);
    }
  };

  return (
    <Sider
      className="yux-sider"
      trigger={null}
      collapsible
      collapsed={collapsed}>
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
                <CustomIcon type={item.icon} />
                <span>{item.name}</span>
              </Menu.Item>
            );
          },
        )}
      </Menu>
    </Sider>
  );
};

export default SiderMenu;
