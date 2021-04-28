/**
 * /*
 *
 * @format
 * @Author: wulin
 * @Date: 2021-02-24 15:54:21
 * @LastEditors: wulin
 * @LastEditTime: 2021-04-28 15:15:42
 * @Description: This is desc
 * @FilePath: /react_system/src/__tests__/components/charts.test.tsx
 */

/** @format */
import * as React from "react";
import { shallow } from "enzyme";
// import "jest-canvas-mock";
// import render from "react-test-renderer";
import Bar from "@components/charts/bar";

describe("图表组件测试", () => {
  it("文本组件 -- 渲染", () => {
    const wrapper = shallow(<div>文本测试</div>);
    expect(wrapper).toMatchSnapshot();
  });

  it("bar组件 -- 渲染", () => {
    const props = {
      data: [],
      options: {
        height: 0,
        style: {},
        subTitle: "",
      },
    };
    const wrapper = shallow(<Bar {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
