import React from "react";
import { Table } from "antd";
export default function SupersetPluginAntdchartTest(props) {
  var {
    data,
    colNames,
    titleText,
    pageSize,
    height
  } = props;
  var columns = colNames.map(cname => {
    return {
      title: cname,
      dataIndex: cname
    };
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, titleText), /*#__PURE__*/React.createElement(Table, {
    columns: columns,
    dataSource: data,
    pagination: {
      pageSize: pageSize
    },
    scroll: {
      y: height - 150
    }
  }));
}