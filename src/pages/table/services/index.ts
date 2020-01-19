/** @format */

import requset from "@utils/request";
// import { stringify } from "qs";

export async function getPage(params: object) {
  return requset("/api/v1/table/list", {
    method: "GET",
    params: params,
  });
}
