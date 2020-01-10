/** @format */

import * as React from "react";
import { Table } from "antd";

class TableComponent extends React.Component<{}> {
  render() {
    const columns: Array<object> = [
      {
        title: "字段1",
        deIndex: "index1",
      },
      {
        title: "字段2",
        deIndex: "index2",
      },
      {
        title: "字段3",
        deIndex: "index3",
      },
      {
        title: "字段4",
        deIndex: "index4",
      },
      {
        title: "字段5",
        deIndex: "index5",
      },
      {
        title: "操作",
        render: (text: string, record: object): JSX.Element => {
          return (
            <div>
              <a>编辑</a>
              <a>删除</a>
            </div>
          );
        },
      },
    ];
    return (
      <div>
        <Table columns={columns} dataSource={[]} />
      </div>
    );
  }
}
export default TableComponent;
