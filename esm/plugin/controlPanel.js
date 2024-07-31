function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { t, validateNonEmpty, validateNumber } from "@superset-ui/core";
import { // sections,
sharedControls } from "@superset-ui/chart-controls";
var config = {
  controlPanelSections: [// sections.legacyRegularTime,
  {
    label: t("Query1"),
    expanded: true,
    controlSetRows: [[{
      name: "cols",
      config: _extends({}, sharedControls.groupby, {
        label: t("Columns1"),
        description: t("Columns to group by"),
        validators: [validateNonEmpty]
      })
    }], [{
      name: "metrics",
      config: _extends({}, sharedControls.metrics, {
        validators: [validateNonEmpty]
      })
    }], ["adhoc_filters"], [{
      name: "row_limit",
      config: sharedControls.row_limit
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
        label: t("Page Size"),
        description: t("The page size of the table"),
        validators: [validateNumber]
      }
    }], [{
      name: "titleText",
      config: {
        type: "TextControl",
        label: t("Title Text"),
        renderTrigger: true,
        default: "Title",
        description: "Text from title"
      }
    }], [{
      name: "bold_text",
      config: {
        type: "CheckboxControl",
        label: t("Bold Text"),
        renderTrigger: true,
        default: true,
        description: t("A checkbox to make the ")
      }
    }], [{
      name: "header_font_size",
      config: {
        type: "SelectControl",
        label: t("Font Size"),
        default: "xl",
        choices: [// [value, label]
        ["xxs", "xx-small"], ["xs", "x-small"], ["s", "small"], ["m", "medium"], ["l", "large"], ["xl", "x-large"], ["xxl", "xx-large"]],
        renderTrigger: true,
        description: t("The size of your header font")
      }
    }]]
  }]
};
export default config;