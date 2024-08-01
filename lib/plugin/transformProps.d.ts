import { ChartProps } from "@superset-ui/core";
import { TableDataType } from "../types";
export default function transformProps(chartProps: ChartProps): {
    width: number;
    height: number;
    data: TableDataType[];
    colNames: any;
    titleText: any;
    boldText: any;
    headerFontSize: any;
    pageSize: any;
};
//# sourceMappingURL=transformProps.d.ts.map