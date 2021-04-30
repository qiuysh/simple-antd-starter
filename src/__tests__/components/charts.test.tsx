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
