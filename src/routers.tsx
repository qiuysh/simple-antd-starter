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
import BaseLayout from "./layout";
import Login from "./pages/login";

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
    <Switch>
      <Route path="/login" exact component={Login} />
      <BaseLayout>
        <Suspense fallback={loading}>
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
        </Suspense>
      </BaseLayout>
    </Switch>
  </Router>
);

export default BasicRouter;
