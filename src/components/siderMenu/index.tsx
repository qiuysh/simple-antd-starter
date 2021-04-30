/** @format */

import * as React from "react";
import { Menu, Layout } from "antd";
import CustomIcon from "@components/customIcon";
import Logo from "../logo";

const { Sider } = Layout;

interface iProps {
  history: any;
  collapsed: boolean;
  menuList: Array<iMenuProps>;
}

interface iMenuProps {
  id: number;
  pid: number;
  name: string;
  icon: string;
  url: string;
  code: string;
  desc: string | null;
  create_time: string;
  modified_time: string | null;
}

const SiderMenu: React.FC<iProps> = props => {
  const { history, collapsed, menuList } = props;
  const { location, push } = history;
  const { pathname } = location;
  const [activeKey, setActive] = React.useState<string>("");

  React.useEffect(() => {
    initialActiveKey();
  }, []);

  // 初始化
  const initialActiveKey = (): void => {
    if (menuList && menuList.length) {
      const firstActiveMenu: iMenuProps | { code: string } =
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
    const targetMenu: iMenuProps | null =
      menuList.find((o: any) => key === o.code) || null;
    if (targetMenu && targetMenu.url) {
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
