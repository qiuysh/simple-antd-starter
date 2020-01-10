/** @format */

import * as React from "react";
import { Icon } from "antd";
import { HashRouter, Route, Switch } from "react-router-dom";

const BaseLayout = React.lazy(() => import("./layout"));
const Login = React.lazy(() => import("./pages/login"));
const Forms = React.lazy(() => import("./pages/form"));
const DashBoard = React.lazy(() => import("./pages/dashboard"));
const System = React.lazy(() => import("./pages/system"));
const Tables = React.lazy(() => import("./pages/table"));
const PageNotFound = React.lazy(() => import("./pages/pageNotFound"));

const loading: JSX.Element = (
  <div
    style={{
      width: "100vw",
      height: "100vh",
      textAlign: "center",
      lineHeight: "100vh",
    }}>
    <Icon
      type="loading"
      style={{
        fontSize: 72,
      }}
    />
  </div>
);

// 根路由
const BasicRouter = (): JSX.Element => (
  <HashRouter>
    <React.Suspense fallback={loading}>
      <Switch>
        <Route path="/login" exact component={Login} />
        <BaseLayout>
          <Route path="/dashboard" exact component={DashBoard} />
          <Route path="/form" exact component={Forms} />
          <Route path="/setting" exact component={System} />
          <Route path="/table" exact component={Tables} />
        </BaseLayout>
        <Route path="*" component={PageNotFound} />
      </Switch>
    </React.Suspense>
  </HashRouter>
);

export default BasicRouter;
