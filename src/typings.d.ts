/** @format */

declare module "*.less" {
  const styles: any;
  export default styles;
}

declare module "classnames";
declare module "enzyme";
declare module "enzyme-adapter-react-16";
declare module "lodash-es";
declare module "react-test-renderer";
declare module "immutability-helper-x";

// 全局
declare namespace GLOBAL {
  interface storeProps {
    menuList: Array<{ [key: string]: any }>;
  }
}
