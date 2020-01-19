/** @format */

const Mock = require("mockjs");
const delay = require("mocker-api/utils/delay");
const noProxy = process.env.NO_PROXY === "true";

const proxy = {
  "POST /api/v1/login": (req, res) => {
    const { username, password } = req.body;
    let resData = {
      data: false,
      result: false,
      result_code: 1,
      result_message: "请检查账号或者密码！",
    };
    if (username === "admin" && password === "admin") {
      resData = {
        data: true,
        result: true,
        result_code: 1,
        result_message: "登录成功",
      };
    }
    res.send(Mock.mock(resData));
  },
  "GET /api/v1/table/list": (req, res) => {
    res.send(
      Mock.mock({
        data: {
          "data|29": [
            {
              "id|+1": 0,
              name: "@name",
              "num|0-100": 0,
              desc: "@cparagraph(1,2)",
              "status|1": ["success", "warning", "error"],
              time: () => {
                return Mock.Random.now();
              },
            },
          ],
          total: 29,
        },
        result: true,
        result_code: 1,
        result_message: "@string",
      }),
    );
  },
};
module.exports = noProxy ? {} : delay(proxy, 1000);
