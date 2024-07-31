import {
  QueryFormData,
  supersetTheme,
  // TimeseriesDataRecord,
} from "@superset-ui/core";

export interface SupersetPluginAntdchartTestStylesProps {
  height: number;
  width: number;
  headerFontSize: keyof typeof supersetTheme.typography.sizes;
  boldText: boolean;
}

interface SupersetPluginAntdchartTestCustomizeProps {
  pageSize: number;
  titleText: string;
}

export type SupersetPluginAntdchartTestQueryFormData = QueryFormData &
  SupersetPluginAntdchartTestStylesProps &
  SupersetPluginAntdchartTestCustomizeProps;

export type SupersetPluginAntdchartTestProps =
  SupersetPluginAntdchartTestStylesProps &
    SupersetPluginAntdchartTestCustomizeProps & {
      data: TableDataType[];
      colNames: string[];
    };

export type TableDataType = {
  key: number;
  [key: string]: any;
};
