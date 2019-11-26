/** @format */

import * as React from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import BaseLayout from "./layout";
import Login from "./pages/login";
import Users from "./pages/users";
import Books from "./pages/books";
import System from "./pages/system";
import Messages from "./pages/messages";
import PageNotFound from "./pages/pageNotFound";

// 根路由
const BasicRouter = () => (
  <HashRouter>
    <Switch>
      <Route path="/login" component={Login} />
      <BaseLayout>
        <Route path="/users" component={Users} />
        <Route path="/books" component={Books} />
        <Route path="/system" component={System} />
        <Route path="/messages" component={Messages} />
      </BaseLayout>
      <Route path="*" component={PageNotFound} />
    </Switch>
  </HashRouter>
);

export default BasicRouter;
