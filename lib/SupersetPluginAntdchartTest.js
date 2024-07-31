"use strict";

exports.__esModule = true;
exports.default = SupersetPluginAntdchartTest;

var _react = _interopRequireDefault(require("react"));

var _antd = require("antd");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SupersetPluginAntdchartTest(props) {
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
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h2", null, titleText), /*#__PURE__*/_react.default.createElement(_antd.Table, {
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