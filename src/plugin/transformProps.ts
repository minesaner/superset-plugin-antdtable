import { ChartProps, DataRecord } from "@superset-ui/core";
import { TableDataType } from "../types";

export default function transformProps(chartProps: ChartProps) {
  const { width, height, formData, queriesData } = chartProps;
  const { boldText, headerFontSize, pageSize, titleText } = formData;
  const queryData = queriesData[0];
  const dataRecord = queryData.data as DataRecord[];
  const data: TableDataType[] = dataRecord.map((item, index) => {
    return {
      ...item,
      key: index,
    };
  });
  const colNames = queryData.colnames;

  return {
    width,
    height,
    data,
    colNames,
    titleText,
    boldText,
    headerFontSize,
    pageSize,
  };
}
