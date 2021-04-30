/** @format */
import * as React from "react";
// import { shallow, render } from "enzyme";
// import "jest-canvas-mock";
import * as renderer from "react-test-renderer";
import SiderMenu from "@components/siderMenu";

describe("菜单测试", () => {
  it("siderMenu -- 快照", () => {
    const props = {
      collapsed: false,
      history: {
        location: {
          pathname: "/",
        },
      },
      menuList: [
        {
          id: 1,
          pid: 0,
          name: "仪表盘",
          type: 1,
          icon: "icondashboard",
          url: "/dashboard",
          code: "dashboard",
          desc: null,
          create_time: "2021-03-10T10:47:52.000Z",
          modified_time: null,
        },
      ],
    };
    const wrapper = renderer
      .create(<SiderMenu {...props} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
