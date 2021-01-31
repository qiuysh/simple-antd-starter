/** @format */

import React, { lazy, Suspense } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// 基本布局
const BaseLayout = lazy(() => import("./layout"));

const Login = lazy(() => import("./pages/login"));
const Forms = lazy(() => import("./pages/form"));
const DashBoard = lazy(() => import("./pages/dashboard"));
const Tables = lazy(() => import("./pages/table"));
const PageNotFound = lazy(
  () => import("./pages/pageNotFound"),
);

const loading: JSX.Element = (
  <div className="page-loading">
    <LoadingOutlined
      style={{
        fontSize: 72,
      }}
    />
  </div>
);

// 根路由
const BasicRouter = (): JSX.Element => (
  <Router>
    <Suspense fallback={loading}>
      <Switch>
        <Route path="/login" exact component={Login} />
        <BaseLayout>
          <Switch>
            <Route
              path="/dashboard"
              exact
              component={DashBoard}
            />
            <Route path="/form" exact component={Forms} />
            <Route path="/table" exact component={Tables} />
            <Route
              path="/exception/:code"
              exact
              component={PageNotFound}
            />
            <Redirect to="/exception/404" />
          </Switch>
        </BaseLayout>
      </Switch>
    </Suspense>
  </Router>
);

export default BasicRouter;
