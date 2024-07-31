"use strict";

exports.__esModule = true;
exports.default = void 0;

var _core = require("@superset-ui/core");

var _chartControls = require("@superset-ui/chart-controls");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var config = {
  controlPanelSections: [// sections.legacyRegularTime,
  {
    label: (0, _core.t)("Query1"),
    expanded: true,
    controlSetRows: [[{
      name: "cols",
      config: _extends({}, _chartControls.sharedControls.groupby, {
        label: (0, _core.t)("Columns1"),
        description: (0, _core.t)("Columns to group by"),
        validators: [_core.validateNonEmpty]
      })
    }], [{
      name: "metrics",
      config: _extends({}, _chartControls.sharedControls.metrics, {
        validators: [_core.validateNonEmpty]
      })
    }], ["adhoc_filters"], [{
      name: "row_limit",
      config: _chartControls.sharedControls.row_limit
    }]]
  }, {
    label: "Settings",
    expanded: true,
    controlSetRows: [[{
      name: "pageSize",
      config: {
        type: "TextControl",
        default: "5",
        renderTrigger: true,
        label: (0, _core.t)("Page Size"),
        description: (0, _core.t)("The page size of the table"),
        validators: [_core.validateNumber]
      }
    }], [{
      name: "titleText",
      config: {
        type: "TextControl",
        label: (0, _core.t)("Title Text"),
        renderTrigger: true,
        default: "Title",
        description: "Text from title"
      }
    }], [{
      name: "bold_text",
      config: {
        type: "CheckboxControl",
        label: (0, _core.t)("Bold Text"),
        renderTrigger: true,
        default: true,
        description: (0, _core.t)("A checkbox to make the ")
      }
    }], [{
      name: "header_font_size",
      config: {
        type: "SelectControl",
        label: (0, _core.t)("Font Size"),
        default: "xl",
        choices: [// [value, label]
        ["xxs", "xx-small"], ["xs", "x-small"], ["s", "small"], ["m", "medium"], ["l", "large"], ["xl", "x-large"], ["xxl", "xx-large"]],
        renderTrigger: true,
        description: (0, _core.t)("The size of your header font")
      }
    }]]
  }]
};
var _default = config;
exports.default = _default;