import React from "react";
import { SupersetPluginAntdchartTestProps, TableDataType } from "./types";
import type { ColumnsType } from "antd/es/table";
import { Table } from "antd";

export default function SupersetPluginAntdchartTest(
  props: SupersetPluginAntdchartTestProps
) {
  const { data, colNames, titleText, pageSize, height } = props;

  const columns: ColumnsType<TableDataType> = colNames.map((cname) => {
    return {
      title: cname,
      dataIndex: cname,
    };
  });

  return (
    <div>
      <h2>{titleText}</h2>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: pageSize }}
        scroll={{ y: height - 150 }}
      />
    </div>
  );
}
