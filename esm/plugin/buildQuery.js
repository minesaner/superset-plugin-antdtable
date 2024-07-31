function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { buildQueryContext } from "@superset-ui/core";
export default function buildQuery(formData) {
  var {
    cols: groupby
  } = formData;
  return buildQueryContext(formData, baseQueryObject => {
    return [_extends({}, baseQueryObject, {
      groupby
    })];
  });
}