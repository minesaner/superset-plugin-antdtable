"use strict";

exports.__esModule = true;
exports.default = transformProps;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function transformProps(chartProps) {
  var {
    width,
    height,
    formData,
    queriesData
  } = chartProps;
  var {
    boldText,
    headerFontSize,
    pageSize,
    titleText
  } = formData;
  var queryData = queriesData[0];
  var dataRecord = queryData.data;
  var data = dataRecord.map((item, index) => {
    return _extends({}, item, {
      key: index
    });
  });
  var colNames = queryData.colnames;
  return {
    width,
    height,
    data,
    colNames,
    titleText,
    boldText,
    headerFontSize,
    pageSize
  };
}