/** @format */

import requset from "../../../utils/request";
// import { stringify } from "qs";

export async function login(params) {
  return requset("/log/v2/api/login", {
    method: "post",
    data: params,
  });
}
