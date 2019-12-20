/** @format */

import * as React from "react";
import { Icon } from "antd";
import { HashRouter, Route, Switch } from "react-router-dom";

const BaseLayout = React.lazy(() => import("./layout"));
const Login = React.lazy(() => import("./pages/login"));
const Users = React.lazy(() => import("./pages/users"));
const Books = React.lazy(() => import("./pages/books"));
const System = React.lazy(() => import("./pages/system"));
const Messages = React.lazy(() => import("./pages/messages"));
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
const BasicRouter = () => (
  <HashRouter>
    <React.Suspense fallback={loading}>
      <Switch>
        <Route path="/login" exact component={Login} />
        <BaseLayout>
          <Route path="/users" exact component={Users} />
          <Route path="/books" exact component={Books} />
          <Route path="/system" exact component={System} />
          <Route path="/messages" exact component={Messages} />
        </BaseLayout>
        <Route path="*" component={PageNotFound} />
      </Switch>
    </React.Suspense>
  </HashRouter>
);

export default BasicRouter;
