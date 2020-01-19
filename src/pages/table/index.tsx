/** @format */

import * as React from "react";
import {
  Table,
  Divider,
  PageHeader,
  Button,
  message,
  Badge,
} from "antd";
import * as ajax from "./services";
import "./style.less";

const statusText: object = {
  success: "成功",
  error: "错误",
  warning: "异常",
};

interface iTableStates {
  reqParams: {
    page: number;
    size: number;
  };
  dataSource: {
    data?: Array<object>;
    total?: number;
  };
  loading: boolean;
}
class TableComponent extends React.Component<
  {},
  iTableStates
> {
  state: iTableStates = {
    reqParams: {
      page: 1,
      size: 10,
    },
    dataSource: {},
    loading: false,
  };

  componentDidMount() {
    this.fetchList();
  }

  fetchList = (): void => {
    let param: object = this.state.reqParams;
    let dataSource: object = {};
    this.setState({
      loading: true,
    });
    ajax.getPage(param).then((res: any) => {
      let isSuccessed: boolean = res.result;
      if (isSuccessed) {
        dataSource = res.data;
      } else {
        message.error(res.result_message);
      }
      this.setState({
        dataSource,
        loading: false,
      });
    });
  };

  changeTablePage = (
    pagination: any,
    filters: any,
    sorter: any,
  ): void => {
    let { reqParams } = this.state;
    reqParams.page = pagination.current;
    this.setState(
      {
        reqParams,
      },
      (): void => {
        this.fetchList();
      },
    );
  };

  render() {
    const { dataSource, reqParams, loading } = this.state;
    const columns: Array<object> = [
      {
        title: "规则名称",
        dataIndex: "name",
      },
      {
        title: "描述",
        dataIndex: "desc",
        width: "25%",
      },
      {
        title: "触发次数",
        dataIndex: "num",
      },
      {
        title: "状态",
        dataIndex: "status",
        render: (text: string): JSX.Element => {
          return (
            <div>
              <Badge
                status={text}
                text={statusText[text]}
              />
            </div>
          );
        },
      },
      {
        title: "调用时间",
        dataIndex: "time",
      },
      {
        title: "操作",
        width: 150,
        render: (
          text: string,
          record: object,
        ): JSX.Element => {
          return (
            <div>
              <a>编辑</a>
              <Divider type="vertical" />
              <a>删除</a>
            </div>
          );
        },
      },
    ];
    const pagination: object = {
      current: reqParams.page,
      pageSize: reqParams.size,
      total: dataSource.total,
    };
    return (
      <PageHeader
        title=""
        extra={[
          <Button key="1" type="primary">
            新增
          </Button>,
        ]}>
        <Table
          rowKey="id"
          loading={loading}
          columns={columns}
          dataSource={dataSource.data}
          onChange={this.changeTablePage}
          pagination={pagination}
        />
      </PageHeader>
    );
  }
}
export default TableComponent;
